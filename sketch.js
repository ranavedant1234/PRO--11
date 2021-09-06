var runner,Runner,path
function preload(){
  //pre-load images
  Runner=loadAnimation("Runner-1.png","Runner-2.png")
  
  path=loadImage("path.png")
  
}

function setup(){
  createCanvas(600,600);
 
  //create sprites here
  path2=createSprite(300,300,100,400)
  path2.addAnimation("hey",path)

runner=createSprite(300,400,45,45);
runner.addAnimation("run",Runner);
runner.scale=0.1


}

function draw() {
  background("white");
path2.velocityY=5
if (path2.y > 600){
  path2.y = path2.height/2;
}


  drawSprites();
}
