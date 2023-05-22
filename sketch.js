
var trex ,trex_running,trex_img;
var ground,groundImage,invisibleground
function preload(){
trex_img=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage=loadImage("ground2.png")
}
function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(20,190,50,55);
trex.addAnimation("trex_running",trex_img);
ground=createSprite(200,180,400,20);
ground.addImage("ground",groundImage)
ground.velocityX=-5;
invisibleground=createSprite(200,190,400,20)
invisibleground.visible=false
}

function draw(){
  background("white");
  if(keyDown("space")){
  trex.velocityY = -10;}
  trex.velocityY=trex.velocityY+1;
  if (ground.x<0) {
    ground.x=ground.width/2
  }
  trex.collide(invisibleground)
  drawSprites();
}

