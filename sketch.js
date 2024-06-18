let xBola = 300;
let yBola = 200;
let diametro = 18;
let raio = diametro / 2 ;

let velXBola = 6;
let velYBola = 6;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colide = false;

let xRaqueteO = 582;
let yRaqueteO = 150;
let velYO ;

let meusPontos = 0;
let pontosO = 0;

let raquetada;
let ponto;
let trilha;

function preLoad(){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada + loadSound ("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostreBola ();
  movimentoBola ();
  colisaoBorda ();
  mostreRaquete (xRaquete, yRaquete);
  movimentoRaquete ();
  colisaoRaquete ();
  verificaColisaoRaquete (xRaquete, yRaquete);
  mostreRaquete (xRaqueteO, yRaqueteO);
  movimentoRaqueteO ();
  verificaColisaoRaquete (xRaqueteO, yRaqueteO);
  incluiPlacar ();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
}

function mostreBola () {
  circle(xBola, yBola, diametro);
}

function movimentoBola() {
  xBola += velXBola;
  yBola += velYBola;
}


function bolinhaNaoFicaPresa(){
    if (xBola - raio < 0){
    xBola = 23
    }
}


function colisaoBorda () {
   if(xBola + raio > width ||
    xBola - raio < 0){
    velXBola *= -1;
  }
  if (yBola + raio> height ||
     yBola - raio < 0){
    velYBola *= -1
  }
}

function mostreRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostreRaqueteO(){
  rect(xRaqueteO , yRaqueteO, raqueteComprimento, raqueteAltura);
}

function movimentoRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
    if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
    }
}

function colisaoRaquete(){
  if(xBola - raio < xRaquete + raqueteComprimento && yBola - raio < yRaquete + raqueteAltura && yBola + raio > yRaquete )
{
    velXBola *= -1;
  }
}

function verificaColisaoRaquete(x,y){
  colide = 
  collideRectCircle(x, y , raqueteComprimento, raqueteAltura, xBola, yBola, raio);
  if (colide){
    velXBola *= -1;
  }
}


function movimentoRaqueteO (){
  if(keyIsDown(87)){
    yRaqueteO -= 10;
  }
    if(keyIsDown(83)){
    yRaqueteO += 10;
    }
}

function incluiPlacar (){
  stroke(255);
  textAlign(CENTER);
  textSize (16);
  fill (color(100, 0, 100));
  rect (200, 10, 40, 20);
  fill ("white");
  text (meusPontos, 220, 26);
  fill (color(100, 0, 100));
  rect (360, 10, 40, 20);
  fill ("white");
  text (pontosO, 380, 26);
}

function marcaPonto(){
  if (xBola > 590){
    meusPontos += 1;
  }
  if (xBola < 10){
    pontosO += 1;
  }
}


