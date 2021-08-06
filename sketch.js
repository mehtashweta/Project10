var sea,seaImg;
var ship,shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-2.png");

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(100,100);
  ship = createSprite(100,200);
  
  sea.addImage("sea",seaImg);
  ship.addAnimation("ship",shipImg1)

  ship.scale = 0.25

  sea.velocityX = 5;
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}

function draw() {
  background("blue");
  
  drawSprites();
  
}