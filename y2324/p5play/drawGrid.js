/* Thanks to Susie Li for this code! */

function drawGrid() {
    strokeWeight(2); // Line Thickness
    stroke(0, 0, 0, 160);

    // Draw a rectangle around the canvas
    noFill();
    rect(0, 0, width, height);

    // Draw Gray Grid
    strokeWeight(1); // Line Thickness
    fill(0, 0, 0, 100);
    stroke(140, 140, 140, 75); // light gray
    textSize(10);

    for (var i = 0; i < width; i = i + 20) {// x-axis
        line(i, 0, i, height);
        text(i * 2, i * 2 - 10, 15);//print x-coordinates
    }

    for (var n = 0; n < height; n += 20) {//y-axis
        line(0, n, width, n);
        text(n * 2, 5, n * 2 + 3); //print y-coordinates
    }

    //mouseX and mouseY location
    fill(150, 180, 190, 100)
    noStroke()
    rect(60 - 25, 40 + 10, 82, 28)
    fill(0)
    textSize(12)
    text("x: " + int(mouseX) + ", y: " + int(mouseY), 60 - 20, 40 + 30)

    //mouseX and mouseY location that move with mouse
    text("(" + int(mouseX) + ", " + int(mouseY) + ")", mouseX - 20, mouseY + 30)

    // reset fill and stroke
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(1);
}
