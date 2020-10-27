const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var engine,world;
var stage=0;
var ballIMG,brickIMG,brick;
var paddle,paddleIMG;
var ground,groundIMG;
 
var form;
var canvas;
var ball;
var nextStage;
var brick1;
var brick2;
var brick3;
var brick4;


function preload(){
	ballIMG=loadImage("ball.png")
    brickIMG=loadImage("brick.png")
    paddleIMG=loadImage("paddle.png")
    groundIMG=loadImage("line.png")
}
function setup(){
 //   engine = Engine.create();
   // world = engine.world;
canvas=createCanvas(displayWidth-30,displayHeight-30)
form= new Form();

  ball=createSprite(580,565,40,40);

  ball.addImage(ballIMG);
  ball.scale=0.16;
  ball.visible=false;
  paddle=createSprite(600,600,20,20);
  paddle.addImage(paddleIMG);
   paddle.scale=0.2;
paddle.visible=false
   brick1=new Group();
   brick2=new Group();
   brick3=new Group();
   brick4=new Group();
}





function draw(){
    
background("pink")
form.display();
//nextStage.display()
console.log(stage)
if(stage===0){
    form.display();
    
}else if(stage===2){

  var rand=random(1,3);
  if(frameCount%60===0){
    if(rand===1){
      spawnB1();
    }else if(rand===2){
      spawnB2();
    }else if(rand===3){
      spawnB3();
    }else{
      spawnB4();
    }
  }
    
  }
  
 


  drawSprites();

}




function spawnB1(){
  var b1=createSprite(random(100,800),random(100,500),10,10);
  b1.addImage(brickIMG);
  b1.scale=0.5
  b1.velocityX=4
  b1.lifetime=200;
  brick1.add(b1)
}
function spawnB2(){
  var b2=createSprite(random(100,750),random(100,600),10,10);
  b2.addImage(brickIMG);
  b2.scale=0.5
  b2.velocityX=4
  b2.lifetime=200;
  brick2.add(b2)
}
   function spawnB3(){
  var b3=createSprite(random(100,900),random(300,600),10,10);
  b3.addImage(brickIMG);
  b3.scale=0.5
  b3.velocityX=4
  b3.lifetime=200;
  brick3.add(b3)
}
  function spawnB4(){
  var b4=createSprite(random(100,500),random(100,300),10,10);
  b4.addImage(brickIMG);
  b4.scale=0.5
  b4.velocityX=4
  b4.lifetime=200;
  brick3.add(b4)
}
  



