let BASE_COLOR = [231, 111, 81];

let COLORS = [
    [38, 70, 83],
    [42, 157, 143],
    [233, 196, 106],
    [200, 184, 219]
];

let HEIGHT = 200;
let WIDTH = 200;

let arr1 = new Array(WIDTH).fill().map(i => new Array(HEIGHT).fill(0));
let arr2 = new Array(WIDTH).fill().map(i => new Array(HEIGHT).fill(0));

function setup() {
    createCanvas(WIDTH, HEIGHT);
    pixelDensity(1);

    arr1[75][75] = 10000;
    arr1[75][125] = 10000;
    arr1[125][75] = 10000;
    arr1[125][125] = 10000;

    background(BASE_COLOR[0], BASE_COLOR[1], BASE_COLOR[2]);
}

function mousePressed() {
    arr1[mouseX][mouseY] = 1000;
}

function mouseDragged() {
    arr1[mouseX][mouseY] = 100;
}

function copyarr(arr1, arr2) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            arr2[x][y] = arr1[x][y];
        }
    }
}

function swap() {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
}

function topple() {
    
    copyarr(arr1, arr2);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let num = arr1[x][y];
            if (num >= 4) {
                arr2[x][y] -= 4;
                if (x + 1 < width)
                    arr2[x + 1][y]++;
                if (x - 1 >= 0)
                    arr2[x - 1][y]++;
                if (y + 1 < height)
                    arr2[x][y + 1]++;
                if (y - 1 >= 0)
                    arr2[x][y - 1]++;
            }
        }
    }

    swap();
}

function render() {
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let num = arr1[x][y];
            let col = BASE_COLOR;
            if (num == 0) {
                col = COLORS[0];
            } else if (num == 1) {
                col = COLORS[1];
            } else if (num == 2) {
                col = COLORS[2];
            } else if (num == 3) {
                col = COLORS[3];
            }

            let pix = (x + y * width) * 4;
            pixels[pix] = col[0];
            pixels[pix + 1] = col[1];
            pixels[pix + 2] = col[2];
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}

function draw() {
    render();

    for (let i = 0; i < 50; i++) {
        topple();
    }
}