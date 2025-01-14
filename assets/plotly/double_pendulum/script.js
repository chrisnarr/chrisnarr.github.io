// Module aliases
const {
    Engine, Render, Runner, Body, Composite,
    Composites, Constraint, Events, Bodies, Vector
} = Matter;

// Create engine and world
const engine = Engine.create();
const world = engine.world;

const canvas_width = 1700;
const canvas_height = 850;

// Create renderer (wider canvas to include state space visualization)
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 0.7*canvas_width,
        height: canvas_height,
        wireframes: false,
        background: '#ffffff'
    }
});

Render.run(render);

// Create runner
const runner = Runner.create();
Runner.run(runner, engine);

// Pendulum properties
const length = 200;
const width = 25;

// Gravity
engine.gravity.scale = 0.01;

// Create the first link
const link1 = Bodies.rectangle(400, 200, length, width, {
    frictionAir: 0,
    chamfer: 5,
    render: {
        fillStyle: '#3498db',
        strokeStyle: '#2c3e50',
        lineWidth: 4
    }
});

// Create the second link
const link2 = Bodies.rectangle(400, 500, length, width, {
    frictionAir: 0,
    chamfer: 5,
    render: {
        fillStyle: '#3498db',
        strokeStyle: '#2c3e50',
        lineWidth: 4
    }
});

// Add constraints to connect the pendulum arms
const constraint1 = Constraint.create({
    pointA: { x: render.options.width/2, y: render.options.height/2 }, // Anchor point
    bodyB: link1,
    pointB: { x: -length / 2 + width/2, y: 0 },
    stiffness: 1,
    length: 0,
    render: {
        strokeStyle: '#e74c3c',
        lineWidth: 8
    }
});

const constraint2 = Constraint.create({
    bodyA: link1,
    pointA: { x: length / 2, y: 0 },
    bodyB: link2,
    pointB: { x: -length / 2, y: 0 },
    // stiffness: 1,
    length: 0,
    render: {
        strokeStyle: '#e74c3c',
        lineWidth: 8
    }
});

// Add the pendulum arms and constraints to the world
Composite.add(world, [link1, link2, constraint1, constraint2]);

const renderCanvas = render.canvas;

// State space visualization
const stateSpaceCanvas = document.createElement('canvas');
stateSpaceCanvas.width = 0.3*canvas_width;
stateSpaceCanvas.height = canvas_height;
stateSpaceCanvas.style.position = 'absolute';
stateSpaceCanvas.style.left = `${renderCanvas.offsetLeft + renderCanvas.width}px`;
stateSpaceCanvas.style.top = `${renderCanvas.offsetTop}px`;
document.body.appendChild(stateSpaceCanvas);

const stateSpaceContext = stateSpaceCanvas.getContext('2d');

// State space plot settings
const plotCenter = { x: stateSpaceCanvas.width/2, y: stateSpaceCanvas.height/2 }; // Center of the plot

// Draw axes for state space
stateSpaceContext.strokeStyle = '#000';
stateSpaceContext.lineWidth = 1;
stateSpaceContext.beginPath();
stateSpaceContext.moveTo(0, plotCenter.y);
stateSpaceContext.lineTo(stateSpaceCanvas.width, plotCenter.y); // Horizontal axis
stateSpaceContext.moveTo(plotCenter.x, 0);
stateSpaceContext.lineTo(plotCenter.x, stateSpaceCanvas.height); // Vertical axis
stateSpaceContext.stroke();

// Trail array for the state space
const stateSpaceTrail = [];

// Trail array to store the path of the second pendulum's tip
const linkTrail = [];

const stateSpaceScalingX = stateSpaceCanvas.width / (2*Math.PI);
const stateSpaceScalingY = 1000;

// Event to update the trail and state space
Events.on(engine, 'afterUpdate', () => {
    linkTrail.unshift({
        position: Vector.clone(link2.position),
        speed: link2.speed
    });

    Render.startViewTransform(render);
    render.context.globalAlpha = 1;

    // // Draw the link trail
    // render.context.beginPath();
    // render.context.strokeStyle = '#e67e22'; // Trail color
    // for (let i = 0; i < linkTrail.length; i++) {
    //     const point = linkTrail[i].position;
    //     if (i === 0) {
    //         render.context.moveTo(point.x, point.y);
    //     } else {
    //         render.context.lineTo(point.x, point.y);
    //     }
    // }
    // render.context.stroke();

    // Plot the link trail as points
    for (let i = 0; i < linkTrail.length; i += 1) {
        const point = linkTrail[i].position;
        const speed = linkTrail[i].speed;

        const hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
        render.context.fillStyle = `hsl(${hue}, 100%, 55%)`;
        // render.context.fillRect(point.x, point.y, 5, 5);
        render.context.beginPath();
        render.context.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        render.context.fill();
    }

    Render.endViewTransform(render);

    // Limit the link trail length
    if (linkTrail.length > 2000) {
        linkTrail.pop();
    }

    // Angular position of the first link
    const angle = -1*((link1.angle + Math.PI / 2) % (2 * Math.PI) + Math.PI);

    // Angular velocity of the first link
    const angularVelocity = link1.angularVelocity;

    // Convert state to pixel coordinates
    const x = plotCenter.x + angle * stateSpaceScalingX; // Scaled angular position
    const y = plotCenter.y - angularVelocity * stateSpaceScalingY; // Scaled angular velocity

    // Add point to state space trail
    stateSpaceTrail.push({ x, y });

    // Limit state trail length
    if (stateSpaceTrail.length > 500) {
        stateSpaceTrail.shift();
    }

    // Clear state space canvas
    stateSpaceContext.clearRect(0, 0, stateSpaceCanvas.width, stateSpaceCanvas.height);

    // Redraw axes
    stateSpaceContext.strokeStyle = '#000';
    stateSpaceContext.lineWidth = 3;
    stateSpaceContext.beginPath();
    stateSpaceContext.moveTo(0, plotCenter.y);
    stateSpaceContext.lineTo(stateSpaceCanvas.width, plotCenter.y); // Horizontal axis
    stateSpaceContext.moveTo(plotCenter.x, 0);
    stateSpaceContext.lineTo(plotCenter.x, stateSpaceCanvas.height); // Vertical axis
    stateSpaceContext.stroke();

    stateSpaceContext.lineWidth = 5;

    for (let i = 0; i < stateSpaceTrail.length; i++) {
        const point = stateSpaceTrail[i];
        const pointPrev = stateSpaceTrail[i-1];
        
        // Calculate transparency based on the index (gradually increasing transparency)
        const transparency = i / stateSpaceTrail.length;  // Gradually increases from 0 to 1

        if (i > 0) {
            stateSpaceContext.beginPath();
            
            // Set strokeStyle with changing transparency (alpha)
            stateSpaceContext.strokeStyle = `rgba(230, 126, 34, ${transparency})`; // #e67e22 with varying alpha

            stateSpaceContext.moveTo(pointPrev.x, pointPrev.y);
            stateSpaceContext.lineTo(point.x, point.y);
            stateSpaceContext.stroke();
        }
    }

    // // Create a linear gradient
    // const gradient = stateSpaceContext.createLinearGradient(0, 0, 200, 200);

    // // Add color stops to the gradient
    // gradient.addColorStop(0, 'white'); // Start color (at the beginning of the line)
    // gradient.addColorStop(1, 'orange'); // End color (at the end of the line)

    // // Draw the state space trail as line
    // stateSpaceContext.beginPath();
    // stateSpaceContext.lineWidth = 5;

    // // Loop through the state space trail points
    // for (let i = 0; i < stateSpaceTrail.length; i++) {
    //     const point = stateSpaceTrail[i];

    //     // Set strokeStyle with changing transparency (alpha)
    //     stateSpaceContext.strokeStyle = gradient; 
    //     // stateSpaceContext.strokeStyle = "#e67e22";
        
    //     // Move to the first point or draw the line segment to the next point
    //     if (i === 0) {
    //         stateSpaceContext.moveTo(point.x, point.y);  // Start at the first point
    //     } else {
    //         stateSpaceContext.lineTo(point.x, point.y);  // Draw line to the next point
    //     }
    // }

    // // Stroke the path to render the trail
    // stateSpaceContext.stroke();

    // // Plot the state space trail as points
    // stateSpaceContext.fillStyle = '#000000'; // Point color
    // for (let i = 0; i < stateSpaceTrail.length; i++) {
    //     const point = stateSpaceTrail[i];
    //     stateSpaceContext.beginPath();
    //     stateSpaceContext.arc(point.x, point.y, 2, 0, 2 * Math.PI);
    //     stateSpaceContext.fill();
    // }

    // Plot current state as point
    stateSpaceContext.fillStyle = '#f55742'; // Point color
    const point = stateSpaceTrail[stateSpaceTrail.length - 1];
    stateSpaceContext.beginPath();
    stateSpaceContext.arc(point.x, point.y, 6, 0, 2 * Math.PI);
    stateSpaceContext.fill();

});


// Add mouse control
const mouse = Matter.Mouse.create(render.canvas);
const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(world, mouseConstraint);
render.mouse = mouse;