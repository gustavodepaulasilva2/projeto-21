
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const BodY = Matter.Body;

var ball
var ball_options



function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  
	ball = Bodies.circle(220,10,10, ball_options);
	World.add(world,ball);
	leftSide = new ground(1100, 600, 20, 120)
	// ladoDireito = new ground()
	groundODJ = new ground(width/2,670,width,20)
}

function keyIsPressed(){
	if (keyCode === up_arrow) {
		Matter.Body.applyForce(ball,ball.position, {x:0.005, y:0})

	}
}


function draw() {
  rectMode(CENTER);
  background(130);

  ellipse(ball.position.x, ball.position.y, 50)
  leftSide.display()
//   ladoDireito.display()
  groundODJ.display()
 
  drawSprites();
 
}

