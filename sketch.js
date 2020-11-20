var database;

var playerCount;
var gameState = 0;
var allPlayers;
var distance = 0;
var form, player,game;
var car1,car2,car3,car4;
var cars;
var backdrop;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-250,displayHeight-100);

    game = new Game();
    game.getState();
    game.start();
    backdrop = loadImage("Backdrop.jfif");
   
}

function draw(){
    background(backdrop);
    if(playerCount == 4){

        game.update(1);

    }
    if(gameState == 1){
        clear();
        game.play();
    }
}

