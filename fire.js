let COLORS = [
    [7, 7, 7],
    [31, 7, 7],
    [47, 15, 7],
    [71, 15, 7],
    [87, 23, 7],
    [103, 31, 7],
    [119, 31, 7],
    [143, 39, 7],
    [159, 47, 7],
    [175, 63, 7],
    [191, 71, 7],
    [199, 71, 7],
    [223, 79, 7],
    [223, 87, 7],
    [223, 87, 7],
    [215, 95, 7],
    [215, 103, 15],
    [207, 111, 15],
    [207, 119, 15],
    [207, 127, 15],
    [207, 135, 23],
    [199, 135, 23],
    [199, 143, 23],
    [199, 151, 31],
    [191, 159, 31],
    [191, 159, 31],
    [191, 167, 39],
    [191, 167, 39],
    [191, 175, 47],
    [183, 175, 47],
    [183, 183, 47],
    [183, 183, 55],
    [207, 207, 111],
    [223, 223, 159],
    [239, 239, 199],
    [255, 255, 255]
]

let WIDTH = 200;
let HEIGHT = 100;

let arr = new Array(HEIGHT).fill(0).map(n => new Array(WIDTH).fill(0));

function setup () {
    createCanvas(WIDTH, HEIGHT);
    pixelDensity(1);
    arr[HEIGHT-1] = new Array(WIDTH).fill(35);
    background(0);
}

function turn_off() {
    arr[HEIGHT-1] = new Array(WIDTH).fill(0);
}

function turn_on() {
    arr[HEIGHT-1] = new Array(WIDTH).fill(35);
}

function draw() {
    background(0);
    for (let i = 1; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            
            let rand = Math.round(Math.random() * 3.0) & 3;
            arr[i-1][j - rand + 1] = Math.min(35, Math.max(arr[i][j] - (rand & 1), 0));
        
        }
    }
    loadPixels();
    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            
            let pix = (i * WIDTH + j) * 4;

            try {
                let col = COLORS[arr[i][j]];

                pixels[pix] = col[0];
                pixels[pix + 1] = col[1];
                pixels[pix + 2] = col[2];
                pixels[pix + 3] = 255;
            } catch {
                console.log(arr[i][j]);
            }

            
        }
    }
    updatePixels();
}