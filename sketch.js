var  gameover, score, timealive, gamestate, play, end, scrollingBackground, background, eightBitImage, eightBitShootingImage, backgroundImage, eightBit, flameGroup, asteroidGroup, coinGroup, coin1, coinImage, flame1, flameImage, asteroid1, asteroidImage;
function preload(){
  eightBitImage = loadImage("8-bit_Standing.png");
  eightBitShootingImage = loadImage("8-bit_Shooting.png");
  backgroundImage = loadImage("techno.jpg");
  coinImage = loadImage("coin.png")
  asteroidImage = loadImage("asteroid2.png");
  flameImage = loadImage("asteroid1.png")
  gameoverImage = loadImage("gameover.png");
}
function setup(){
  createCanvas(1200,600);
  background = createSprite(600,300,1200,1200);
  background.addImage("techno", backgroundImage);
  background.x=background.width/2;
  background.scale=3;
  background.velocityX=-2;
  coinGroup = new Group();
  asteroidGroup = new Group();
  flameGroup = new Group();
  eightBit = createSprite(75,500,10,10);
  eightBit.addImage("8-bit", eightBitImage);
  eightBit.scale=0.15;
  
  play = 1;
  end = 0;
  gamestate = play;

  score = 0;

 

}
function draw(){
  
  if (background.x<0){
     background.x=background.width/2;
    
  }

  if(gamestate===play){
  
  if(keyDown("up")){
    eightBit.velocityY=-4;
  }
  if(keyDown("down")){
    eightBit.velocityY=4;
  }
  if(keyDown("left")){
    eightBit.velocityX=-4;
  }
  if(keyDown("right")){
    eightBit.velocityX=4;
  }
  if(eightBit.y>=550){
    eightBit.y=550;
  }
  if(eightBit.y<=50){
    eightBit.y=50;
  }
  if(eightBit.x<=0){
    eightBit.x=0;
  }
  if(eightBit.x>=900){
    eightBit.x=900;
  }
  
  var count = Math.round(random(1,7));
  console.log(count);
  
    if(frameCount%40==0){
      if (count === 1){
        coin();
      }
      else if(count === 2){
        asteroid();
      }
      else if(count===3){
        flame();
      }
      else if(count === 4){
        asteroid();
      }
      else if(count===5){
        flame();
      }
      else if(count===6){
        coin();
      }
    }
    
    score = score + Math.round(getFrameRate()/60);
}
  drawSprites();
  text("Time Alive: " + score,50,50);

  if ( eightBit.isTouching(flameGroup)|eightBit.isTouching(asteroidGroup)){
    gamestate = end;
    console.log("gameover");
     eightBit.velocityY=0;
     eightBit.velocityX = 0;
    // flame1.velocityX = 0;
    // asteroid1.velocityX = 0;
    // coin1.velocityX = 0;
    gameover = createSprite(600,300,100,100);
    gameover.addImage("gameover", gameoverImage);
    score=score+0;
 
  }

 
  

}


function coin(){
  
  coin1 = createSprite(900,0,10,10);
  coin1.velocityX=-4.5;
  coin1.addImage("coin",coinImage);
  coin1.scale=0.1;
  coin1.y = Math.round(random(20,570));
  coin1.lifetime = 400;
  coinGroup.add(coin1);


}
function flame(){
  
  flame1 = createSprite(900,0,10,10);
  flame1.velocityX=-4.5;
  flame1.addImage("flame",flameImage);
  flame1.scale=0.1;
  flame1.y = Math.round(random(20,570));
  flame1.lifetime = 400;
  flameGroup.add(flame1);
  
  flame1.setCollider("rectangle", 0,0, 100,40);
}

function asteroid(){
  
  asteroid1 = createSprite(900,0,10,10);
  asteroid1.velocityX=-4.5;
  asteroid1.addImage("asteroid",asteroidImage);
  asteroid1.scale=0.1;
  asteroid1.y = Math.round(random(20,570));
  asteroid1.lifetime = 400;
  asteroidGroup.add(asteroid1);
  asteroid1.debug = true;
  asteroid1.setCollider("rectangle", 0,0, 100,100);
}
