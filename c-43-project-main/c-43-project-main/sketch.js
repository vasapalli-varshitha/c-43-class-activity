
var player,playerImg;
var alien,alienImg;
var bullet,bulletImg;
var gameState="serve";
var bulletGroup,alienGroup;



function preload(){
  bg= loadImage("sky.png");
  playerImg= loadImage("rocket.png");
  alienImg = loadImage("alien.png");
  // alien2Img = loadImage("alien2.png");
  // alien3Img = loadImage("alien3.png");
  bulletImg=loadImage("bullet.png");
  
}

function setup() {


  createCanvas(400, 500);
  
  bulletGroup=new Group();
  alienGroup=new Group();
         
  // alien=createSprite(Math.round(random(20,380)),40,30,30);
  // alien.addImage(alienImg);
  // alien.scale=0.2;
  // alien2=createSprite(Math.round(random(20,380)),40,30,30);
  // alien2.addImage(alien2Img);
  // alien2.scale=0.2;
  // alien3=createSprite(Math.round(random(20,380)),40,30,30);
  // alien3.addImage(alien3Img);
  // alien3.scale=0.2;
  player=createSprite(200,440,30,30);
  player.addImage(playerImg);
  player.scale=0.2;

  
}


function draw() {
  background(bg);
  
    
   if(keyDown("LEFT_ARROW")){
   player.x = player.x -3;
    
   }
    
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x +3;
  }

   if(gameState==="serve"){
     textSize(20);
     text("press DOWN ARROW arrow to start",55,250);

    if(keyDown("DOWN_ARROW")){
      gameState="play";
       
    }
    }
    if( gameState==="play"){
        if(keyDown("UP_ARROW")){
         
          spawnBullet()
         
        }
        if(frameCount%100===0){
          alienA()
        }
        if( bullet.overlap(alien)){
          alien.destroy();
         
         }
   

        
         
     }
    //  alienA() ;
         drawSprites();
       
}

function spawnBullet(){
  var bullet=createSprite(player.x,player.y,10,10);
  bullet.addImage(bulletImg);
  bullet.scale=0.05;
  bullet.velocityY=-5;
  // bulletGroup.add(bullet);
}


function alienA() {
  alien=createSprite(Math.round(random(20,380)),40,30,30);
  alien.addImage(alienImg);
  alien.scale=0.2;
   alien.velocityY=3;
//  alienGroup.add(alien);
}