var player,playerImage 
var monster,monsterImage
var backdrop,backdrop2,backdrop3
var backdropImage,backdrop2Image,backdrop3Image
var ground,meteor,ground2

function preload() {
  playerImage=loadImage("player.png")
  monsterImage=loadImage("creeper.png")
  backdropImage=loadImage("background.jpg")
 backdrop2Image=loadImage("background 2.jpg")
 backdrop3Image=loadImage("background 3.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
ground=createSprite(width/2,height/2,width,height)
  ground.addImage(backdropImage) 
  ground.scale=8
  ground.velocityX=-10
  
  ground2=createSprite(width/2,height-20,width,20)
  ground2.visible=false

  
  
 
player=createSprite(450,height-650,50,50)
  player.addImage(playerImage)
  player.scale=1.3

 






}

function draw() {
background("red")
  if (ground.x < width/3){
   ground.x = ground.width*2/3;
  }
  
  
 if(keyIsDown("space")) {
player.y-=10


}
player.velocityY=player.velocityY+0.5
player.collide(ground2)
  


  drawSprites() 
}

