let xMax = 400;
let yMax = 600;
let scena = 0;

function setup() {
  createCanvas(xMax, yMax);
  noStroke();
  
}

function draw() {
  if(frameCount < 30){
    scena = 0;
  } else if(frameCount < 60){
    scena = 1;
  } else if (frameCount < 90){
    scena = 2;
  } else {
    scena = 3;
  }
  // Sfondo azzurro
  background("#A5D9FD");

  // Nuvole di sfondo
  disegnaNuvole();
  
// Nuvole in primo piano
  nuvola(60, 255, 1.5, 255);
  nuvola(255, 255, 1.5, 255);
if(scena == 0){
  disegnaFacciaFelice(100, 255); //prima nuvola
  disegnaFacciaFelice(295, 255); //seconda nuvola
}
  if(scena == 1){
    disegnaFacciaTriste(100, 255);
    disegnaFacciaFelice(295, 255);
  }
  if(scena == 2){
    disegnaFacciaTriste(100, 255);
    disegnaFacciaArrabbiata(295, 255);
  }
  if(scena == 3){
    disegnaFacciaTriste(100, 255);
    disegnaFacciaTriste(295, 255);
  }
}

function disegnaFacciaFelice(x, y){

  //occhi
  fill(0);
   stroke(0);
strokeWeight(3);
 
  ellipse(x - 15, y - 5, 5, 8);
  ellipse(x + 15, y - 5, 5, 8);
//Bocca sorridente
  line(x -10, y + 10, x, y +15);
  line (x, y +15, x + 10, y + 10);
  }

function disegnaFacciaTriste(x, y){
   //occhi
  fill(0);
  stroke(0);
  strokeWeight(3);
  
 line(x-20, y-10, x-5, y -3 );
 line(x+20, y-10, x + 5, y -3);
//Bocca triste
  line(x -10, y + 10, x +10, y + 10);

}

function disegnaFacciaArrabbiata(x, y){

  //occhi
  fill(0);
   stroke(0);
strokeWeight(3);
 
  ellipse(x - 20, y - 5, 5, 8);
  ellipse(x - 10, y - 5, 5, 8);
//Bocca arrabbiata
    line(x -10, y + 15, x +15, y + 10);
  }

function disegnaNuvole() {
  nuvola(30, 90, 0.7, 200);
  nuvola(190, 150, 1, 200);
  nuvola(150, 60, 1, 200);
  nuvola(330, 90, 0.7, 200);
}

function nuvola(x, y, scala, trasparenza) {
  push();
  translate(x, y);
  scale(scala);

  noStroke();
  fill(255, 255, 255, trasparenza);

  ellipse(0, 0, 60, 40);
  ellipse(25, -15, 50, 45);
  ellipse(50, 0, 60, 40);
  ellipse(25, 10, 50, 40);

  pop();
}

