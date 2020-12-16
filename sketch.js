var ghost,ghostImage,ghostjumping;
var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climbersGroup;
var invisibleblock,invisibleGroup;
var gameState = "Play";

function preload(){
  ghostImage = loadImage("ghost-standing.png");
  
  towerImage = loadImage("tower.png");
  
  doorImage = loadImage("door.png");
  
  climberImage = loadImage("climber.png");
  
  ghostjumping = loadImage("ghost-jumping.png");
}
function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200);
  ghost.addImage(ghostImage);
  ghost.scale = 0.3;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleGroup = new Group();
  
}

function draw(){
  background("white");
  
  if(gameState === "Play"){
   if(tower.y > 400){
     tower.y = 300;
      }
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
    ghost.velocityY+=0.8;
    if(keyDown("right")){
      ghost.x+=3
    }
   if(keyDown("left")){
      ghost.x-=3
    } 
    obstacles();
    
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleGroup.isTouching(ghost)|| ghost.y>600){
      ghost.destroy();
      gameState = "End";
    }
  }
  
  
  
  
  if(gameState === "End"){
    textSize(25);
    fill("red");
    text("GAME OVER",250,300)
    doorsGroup.destroyEach();
    climberGroup.destroyEach();
    invisibleGroup.destroyEach();
  }
  

  
  
  
  
  
  
  drawSprites();
}

function obstacles(){
  if(frameCount%240 == 0){
    door = createSprite(200,-50);
    door.x = Math.round(random(120,400));
    climber = createSprite(200,10);
    invisibleblock = createSprite(door.x,15);
    invisibleblock.width = climber.width;
    invisibleblock.height = 2;
    
    
    climber.x = door.x;
    invisibleblock.x = door.x
    invisibleblock.debug = true;
    
    climber.addImage(climberImage);
    door.addImage(doorImage);
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleblock.velocityY = 1;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleGroup.add(invisibleblock)
    
    ghost.depth = door.depth;
    ghost.depth+= 1;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
}