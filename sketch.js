//Projeto 3 - Desenhando Circulos

function setup() {
  createCanvas(400, 400);
}

function draw() {
 stroke("black");
  fill(210,0,250);
  if(mouseIsPressed){
    circle(mouseX,mouseY,10);
  }
}