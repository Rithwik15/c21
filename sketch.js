var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic : false,
		restitution:0.8,
		friction:0,
		density:1.2
		}	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bodies.circle(200,200,40,options)
	World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
 
 
	rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
 
}



