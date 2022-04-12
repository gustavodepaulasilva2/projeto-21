
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ball_options
var leftSide
var ladoDireito
var groundODJ
var radius = 40

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	
  
	ball = Bodies.circle(220,10,radius/2, ball_options);
	World.add(world,ball);
	leftSide = new ground(1100, 600, 20, 120)
	ladoDireito = new ground(1300,600,20,120)
	groundODJ = new ground(width/2,670,width,20)
	Engine.run(engine)
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position, {x:80, y:-80})

	}
}


function draw() {
  rectMode(CENTER);
  background(130);

  ellipse(ball.position.x, ball.position.y, radius, radius)
  leftSide.display()
  ladoDireito.display()
  groundODJ.display()
 
  drawSprites();
 
}

