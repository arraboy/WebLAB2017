var colore;

function setup() {
  createCanvas(396, 396);
  background(255);
  colore=120;
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    background(255);
	fill(255);
  } else {
    fill(colore);
  }
  ellipse(mouseX, mouseY, 10, 10);
  colore++;
  if (colore==255) {
	  colore=120;
	  }
}
