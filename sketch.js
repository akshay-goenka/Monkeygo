var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var fruitsGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20)
monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  
  obstacleGroup = new Group();
  fruitsGroup = new Group();
}


function draw() {
background(220);
   
  
  var survivalTime=0
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
    
//  console.log((monkey.y))
  if(keyDown("space")&& monkey.y >= 314)
    {
       monkey.velocityY=-16
    }
  
  monkey.velocityY=monkey.velocityY+0.7
  
  monkey.collide(ground)
    createObstacles();
  createFruits();
 if(fruitsGroup.isTouching(monkey)){
  fruitsGroup.destroyEach();
}
 if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        fruitsGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        fruitsGroup.setLifetimeEach(-1);
}

  
  drawSprites();
}

function createFruits(){
 
if(frameCount%80===0)
{
  banana=createSprite(600,Math.round(random(120,200),20,20));
  banana.addImage("dh", bananaImage);
  banana.velocityX=-4;
  banana.lifeTime=400;
  banana.scale=0.1
 fruitsGroup.add(banana);
}
}


function createObstacles()
{
  
  
  if(frameCount%80===0)
{
  obstacle=createSprite(600,325,20,20);
  obstacle.velocityX=-4;
  obstacle.addImage("h",obstacleImage);
  
  obstacle.scale=0.15;
  obstacle.lifeTime=400;
  
     obstacleGroup.add(obstacle);
  
  
}
  
  
}


