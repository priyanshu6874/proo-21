var astronaut;
var bathImg;
var drinkImg;
var eatImg;
var gymImg;
var moveImg;
var brush;
var sleep;
var space;

function preload(){

bathImg=loadAnimation("images/bath1.png","images/bath2.png");
drinkImg=loadAnimation("images/drink1.png","images/drink2.png");
eatImg=loadAnimation("images/eat1.png","images/eat2.png");
gymImg=loadAnimation("images/gym1.png","images/gym2.png");
moveImg=loadAnimation("images/move.png","images/move1.png");
brush=loadImage("images/brush.png");
sleep=loadImage("images/sleep.png");
space=loadImage("images/iss.png");

}

function setup() {
  createCanvas(400, 400);
  astronaut=createSprite(300,230,50,50);
  astronaut.addImage(sleep);
  astronaut.scale=0.1;
}

function draw() {
  background("blue");
  textSize(20);
  text("press up arrow-brush",50,50);

  
if(keyDown("UP_ARROW")){
  astronaut.addImage("brushing",brush);
  astronaut.changeImage("brushing",brush);
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation(gymImg);
    astronaut.changeAnimation(gymImg);
    astronaut.y=340;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation(bathImg);
    astronaut.changeAnimation(bathImg);
    astronaut.y=340;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation(eatImg);
  astronaut.changeAnimation(eatImg);
  astronaut.y=350;
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}
if(keyDown(m));
astronaut.addAnimation(moveImg);
astronaut.changeAnimation(moveImg);
astronaut.y=330;
astronaut.x=astronaut.x+3;
}
  drawSprites();
}
