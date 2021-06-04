var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Image, car2Image, car3Image, car4Image , groundImage;
var trackImage;


function preload(){
  car1Image = loadImage("images/car1.png")
  car2Image = loadImage("images/car2.png")
  car3Image = loadImage("images/car3.png")
  car4Image = loadImage("images/car4.png")
  groundImage = loadImage("images/ground.png")
  trackImage = loadImage("images/track.jpg")
}


function setup(){
 canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  xvel=0;
  yvel=0;
  distance=0;
  gameState=0;
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  //background(200,125,255)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();        
  }
  if(gameState=== 2){
    console.log("End")
  }
}