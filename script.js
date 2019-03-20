// Polar Perlin Noise Loop
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/136-polar-perlin-noise-loops.html
// https://youtu.be/ZI1dmHv3MeM
// https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn

// Times Tables Cardioid Visualization
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/133-times-tables-cardioid.html
// https://youtu.be/bl3nc_a1nvs
// https://editor.p5js.org/codingtrain/sketches/gwcGb_NPm

let r;
let factor = 0;

function setup() {
    if (windowWidth < 700) {
        createCanvas(windowWidth, windowHeight);
    } else {
        createCanvas(windowWidth / 2, windowHeight / 2);
    }

    if (windowWidth < 400) {
        r = width / 2 - 16;
    } else {
        r = height / 2 - 16;
    }
}

function getVector(index, total) {
    const angle = map(index % total, 0, total, 0, TWO_PI);
    const v = p5.Vector.fromAngle(angle + PI);
    v.mult(r);
    return v;
}

function draw() {
    background(0);
    const total = 200; //int(map(mouseX, 0, width, 0, 200));
    factor += 0.0005;

    translate(width / 2, height / 2);
    stroke(255, 150);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, r * 2);

    strokeWeight(2);
    for (let i = 0; i < total; i++) {
        const a = getVector(i, total);
        const b = getVector(i * factor, total);
        line(a.x, a.y, b.x, b.y);
    }
}

window.addEventListener('resize', function () {

    if (windowWidth < 700) {
        resizeCanvas(windowWidth, windowHeight);
    } else {
        resizeCanvas(windowWidth / 2, windowHeight / 2);
    }

    if (windowWidth < 400) {
        r = width / 4 - 16;
    }

    translate(width / 2, height / 2);
});