var n = 100;
var x = [], y = [], z = [];
var dt = 0.005;

// Initial random values for the Lorenz system
for (var i = 0; i < n; i++) {
    x[i] = Math.random() * 2 - 1;
    y[i] = Math.random() * 2 - 1;
    z[i] = 30 + Math.random() * 10;
}

// Create the initial 3D plot
Plotly.newPlot('plot', [{
    x: x,
    y: y,
    z: z,
    mode: 'markers',
    marker: {
        size: 8,
        color: 'rgba(255, 100, 100, 1)'  // Custom color
    },
    // type: 'scatter3d'
    }],{
      xaxis: {range: [-40, 40]},
      yaxis: {range: [-40, 40]},
      zaxis: {range: [-40, 40]}
    },{
    scene: {
        xaxis: {title: 'X', range: [-20, 20]},
        yaxis: {title: 'Y', range: [-20, 20]},
        zaxis: {title: 'Z', range: [0, 60]},
        camera: {
            eye: {
              x: 1.5,  // Move camera to the right
              y: 1.5,  // Move camera upwards
              z: 1.5   // Move camera far away for a wider view
            },
            up: {
              x: 0,
              y: 0,
              z: 1
            },
            center: {
              x: 0,
              y: 0,
              z: 0  // Focus on the center of the plot
            }
          }
    },
    title: '3D Lorenz Attractor'
});

// Function to compute the Lorenz attractor
function compute() {
    var s = 10, b = 8/3, r = 28;
    var dx, dy, dz;
    var xh, yh, zh;

    for (var i = 0; i < n; i++) {
        dx = s * (y[i] - x[i]);
        dy = x[i] * (r - z[i]) - y[i];
        dz = x[i] * y[i] - b * z[i];

        xh = x[i] + dx * dt * 0.5;
        yh = y[i] + dy * dt * 0.5;
        zh = z[i] + dz * dt * 0.5;

        dx = s * (yh - xh);
        dy = xh * (r - zh) - yh;
        dz = xh * yh - b * zh;

        x[i] += dx * dt;
        y[i] += dy * dt;
        z[i] += dz * dt;
    }
}

var frameDuration = 5; // Delay in milliseconds (higher value = slower animation)

function update() {
    compute();

    Plotly.animate('plot', {
        data: [{ x: x, y: y, z: z }]
    }, {
        transition: {
            duration: frameDuration
        },
        frame: {
            duration: frameDuration,
            redraw: false
        }
    });

    // Schedule the next frame
    requestAnimationFrame(update);
}

// Start the animation loop
requestAnimationFrame(update);
