let xMax = 400;
let yMax = 600;
let scena = 0;
let colore;
let contatore = 0;
let soglia = 120;

function setup() {
  createCanvas(xMax, yMax);
  noStroke();
  
}

function draw() {
  contatore++;
//quando raggiunge la soglia, riparte da zero
  if (contatore >= soglia){
    contatore = 0; 
  }

  //la scena cambia ogni tot fotogrammi
  if(contatore < 30){
    scena = 0;
  } else if(contatore < 60){
    scena = 1;
  } else if (contatore < 90){
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
 
// Nuvola 1 in primo piano e colori in base alla scena
  if (scena == 0){
     nuvola(60, 255, 1.5, 255, color("#FFFFFF"));
  } else{
    nuvola(60, 255, 1.5, 255, color("#646B63"));
  }
  
  //nuvola 2 in primo piano e colori in base alla scena
  if(scena == 0){
    nuvola(255, 255, 1.5, 255, color("#FFFFFF"));
  } else if (scena == 1){
    nuvola(255, 255, 1.5, 255, color("#FFFFFF"));
  } else if(scena == 2){
    nuvola(255, 255, 1.5, 255, color("#C3C6BD"));
  }
   else if(scena == 3){
    nuvola(255, 255, 1.5, 255, color("#646B63"));
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
  
  //Dalla prima nuvola esce la pioggia (dalla scena 1 in avanti)
  if(scena >= 1){
    disegnaPioggia(60, 255);
  }
  
  //piove dalla seconda nuvola, ma solo nella terza scena
  if(scena ==3){
    disegnaPioggia(255, 255);
  }
}


function disegnaFacciaFelice(x, y){

  //occhi felici
  fill(0);
  stroke(0); //definisco lo stroke solo per bocca e occhi
  strokeWeight(3);
 
  ellipse(x - 15, y - 5, 5, 8);
  ellipse(x + 15, y - 5, 5, 8);
  
//Bocca felice
  line(x -10, y + 10, x, y +15);
  line (x, y +15, x + 10, y + 10);
  }

function disegnaFacciaTriste(x, y){
  
  //occhi tristi
  fill(0);
  stroke(0);
  strokeWeight(3);
  
 line(x-20, y-10, x-5, y -3 );
 line(x+20, y-10, x + 5, y -3);
  
//Bocca triste
  line(x -10, y + 10, x +10, y + 10);

}

function disegnaFacciaArrabbiata(x, y){

  //occhi arrabbiati
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
    colore = color("#646B63");
  } else{
    colore = color("#FFFFFF");
  }
  nuvola(30, 90, 0.7, 150, colore); 
  nuvola(190, 150, 1, 150, colore);
  nuvola(150, 60, 1, 150, colore);
  nuvola(330, 90, 0.7, 150, colore);
}

//funzione che vale per tutte le nuvole
function nuvola(x, y, scala, trasparenza, colore) {
  push();
  translate(x, y);
  scale(scala);

  noStroke();
  fill(red(colore), green(colore), blue(colore), trasparenza);//per far cambiare i colori delle nuvole perfettamente e mantenere la trasaprenza
  
//ellissi che sovrapposte formano la nuvola
  ellipse(0, 0, 60, 40);
  ellipse(25, -15, 50, 45);
  ellipse(50, 0, 60, 40);
  ellipse(25, 10, 50, 40);

 pop();
}


function disegnaPioggia(x,y) {
  stroke("#55BFF5");
  strokeWeight(2);

  for(let i = 0; i < 8; i++){ //8 trattini per ogni chiamata della funzione
    let xGoccia = x + 30 + random (-60, 60); //definisco orizzontalmente le nuvole
    let yGoccia =  y + 30 + random(20, 280);//definisco verticalmente le gocce

    line(xGoccia, yGoccia, xGoccia, yGoccia +15); //coordinate delle gocce
  }
}

