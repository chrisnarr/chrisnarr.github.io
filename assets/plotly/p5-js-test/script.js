let x, y; // Position of the circle
let xSpeed, ySpeed; // Speed of the circle

function setup() {
    createCanvas(400, 400); // Create a 400x400 pixel canvas
    x = width / 2;
    y = height / 2;
    xSpeed = 3;
    ySpeed = 2;
}

function draw() {
    background(30); // Dark gray background
    fill(100, 150, 255); // Light blue circle
    noStroke();
    ellipse(x, y, 50, 50); // Draw the circle (x, y, width, height)

    // Update circle position
    x += xSpeed;
    y += ySpeed;

    // Bounce off walls
    if (x > width - 25 || x < 25) xSpeed *= -1;
    if (y > height - 25 || y < 25) ySpeed *= -1;
}