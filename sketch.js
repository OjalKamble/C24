
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,sand;
var ground,stone,rubber;

function preload()
{}

function setup() {
	createCanvas(1300, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      hammer = new Hammer(100,100,50,20);
      ground = new Ground(850,400,1700,10);
      stone = new Stone(500,100);
      rubber = new Rubber(660,100,40);
      sand = new Sand(890,395);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightblue");

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  sand.display();

  drawSprites();
 
}



