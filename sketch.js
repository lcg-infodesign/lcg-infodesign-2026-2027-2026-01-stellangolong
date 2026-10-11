let xMax = 400;
let yMax = 600;
let scena = 0;
let colore;

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
  // Sfondi a seconda della faccia che assume la nuvola
  if(scena == 2){
    background("#D2D2D2");
  } else if (scena == 3){
    background("#9b8aa6");
  } 
  else{
     background("#A5D9FD");
  }
   
  // Nuvole di sfondo
  disegnaNuvole();
  
// Nuvola 1 in primo piano
  if (scena == 0){
     nuvola(60, 255, 1.5, 255, color("#FFFFFF"));
  } else{
    nuvola(60, 255, 1.5, 255, color("#23282B"));
  }
  //nuvola 2 in primo piano
  if(scena == 0){
    nuvola(255, 255, 1.5, 255, color("#FFFFFF"));
  } else if (scena == 1){
    nuvola(255, 255, 1.5, 255, color("#FFFFFF"));
  } else if(scena == 2){
    nuvola(255, 255, 1.5, 255, color("#C3C6BD"));
  }
   else if(scena == 3){
    nuvola(255, 255, 1.5, 255, color("#23282B"));
  }
  
//Facce a seconda della scena
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
  
  if(scena == 2){
    colore = color("#C3C6BD");
  } else if(scena == 3){
    colore = color("#23282B");
  } else{
    colore = color("#FFFFFF");
  }
  nuvola(30, 90, 0.7, 150, colore);
  nuvola(190, 150, 1, 150, colore);
  nuvola(150, 60, 1, 150, colore);
  nuvola(330, 90, 0.7, 150, colore);
}

function nuvola(x, y, scala, trasparenza, colore) {
  push();
  translate(x, y);
  scale(scala);

  noStroke();
  fill(red(colore), green(colore), blue(colore), trasparenza);

  ellipse(0, 0, 60, 40);
  ellipse(25, -15, 50, 45);
  ellipse(50, 0, 60, 40);
  ellipse(25, 10, 50, 40);

  pop();
}

