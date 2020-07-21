var paper,pillar1,pillar2,bottom

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
   
  paper = new Paper(100,375,20,20);
   pillar1 = new Ground(505,620,10,105);
   pillar2 = new Ground(595,620,10,105);
   bottom = new Bin(550,615,100,105);
  ground = new Ground(400,680,800,20)
  slingshot = new SLINGSHOT(paper.body,{x:200, y:50});
}


function draw() {
  background("white")
  Engine.update(engine);
  rectMode(CENTER);
 
  
  drawSprites();
 paper.display();
 pillar1.display();
 pillar2.display();
 bottom.display();
 ground.display();
 slingshot.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
   }
   function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
    slingshot.fly();
}




