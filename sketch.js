var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("images/image main shinchan.jpg")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.start();
  
}

function draw() {
  background();
  
}