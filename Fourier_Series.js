let time = 0;
let wave = [];




function setup() {
    createCanvas(800, 400);

}


function draw() {
    background(0);
    translate(150, 200);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 30; i++) {
        let prevx = x;
        let prevy = y;
        n = 2 * i + 1;
        let radius = 75 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        


        stroke(255);
        noFill();
        ellipse(prevx, prevy, radius * 2);




        fill(255);
        stroke(255);
        line(prevx, prevy, x, y);
        // ellipse(x, y, 3);




    }

    translate(200, 0);
    line(x - 200, y, 0, wave[0]);
    wave.unshift(y);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }

    endShape();




    time += 0.03;

    if (wave.length > 450) {
        wave.pop();

    }


}
