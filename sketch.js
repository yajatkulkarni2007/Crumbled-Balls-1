
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
ground1=new Ground(400,750,800,20);
dustbin1=new Dustbin(700,700,200,20);
dustbin2=new Dustbin(700,700,20,100);
dustbin3=new Dustbin(700,700,20,100);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  display();
  drawSprites();
 
}
function display(){
	ground1.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
}


