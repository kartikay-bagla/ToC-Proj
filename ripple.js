let DAMPING = 0.98;

let WIDTH = 400;
let HEIGHT = 400;

let rows = HEIGHT;
let cols = WIDTH;

let arr1 = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
let arr2 = new Array(cols).fill(0).map(n => new Array(rows).fill(0));

function setup() {
    pixelDensity(1);
    createCanvas(WIDTH, HEIGHT);

    document.getElementById("damping").value = DAMPING;
}

function changeDamping() {
    DAMPING = document.getElementById("damping").value;
}

function update_cells() {
    for (let i = 1; i < cols - 1; i++) {
        for (let j = 1; j < rows - 1; j++) {
            let neighbours_sum = (arr2[i + 1][j] + arr2[i][j + 1] + arr2[i][j - 1] + arr2[i - 1][j]) / 2;
            arr1[i][j] = Math.floor(neighbours_sum) - arr1[i][j];
            arr1[i][j] = arr1[i][j] * DAMPING;

            let ind = (i + j * cols) * 4;
            pixels[ind + 0] = arr1[i][j];
            pixels[ind + 1] = arr1[i][j];
            pixels[ind + 2] = arr1[i][j];
        }
    }
}

function swap() {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
}

function draw() {
    background(0);
    loadPixels();
    update_cells();
    updatePixels();
    swap();
}

function mousePressed() {
    arr2[mouseX][mouseY] = 6000;
}

function mouseDragged() {
    arr2[mouseX][mouseY] = 6000;
}