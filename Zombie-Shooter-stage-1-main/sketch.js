var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg1,zombieImg2,zombieImg3,zombieImg4,zombieGroup
var bulletImg,bullet;

var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player, form,game;
var player1,player2;
var players;
var heart,heartImg1,heartImg2,heartImg3;
var score =0;
var l=0;

var loseSound,winSound,explosionSound;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bulletImg = loadImage("assets/bullet.png");

  bgImg = loadImage("assets/bg.jpeg")
  
  zombieImg1 = loadImage("assets/zombie1.png");
  zombieImg2 = loadImage("assets/zombie2.png")
  zombieImg3 = loadImage("assets/zombie3.png");
  zombieImg4 = loadImage("assets/zombie4.png");

  heartImg1 = loadImage("assets/heart_1.png");
  heartImg2 = loadImage("assets/heart_2.png");
  heartImg3 = loadImage("assets/heart_3.png");

  winSound = loadSound("assets/win.mp3");
  loseSound = loadSound("assets/lose.mp3");
  explosionSound = loadSound("assets/explosion.mp3");

}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
   database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

//creating the player sprite
/*player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)**/
  
   zombieGroup = new Group(); 

}

function draw() {
  background(bgImg); 

if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  game.play();
}

  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){ // touches is an array , detecting the touch on the sreen 
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg) 
}**/

drawSprites();

}


