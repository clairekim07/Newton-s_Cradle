
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var world,rope,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	roof = new Roof(width/2,height/4,width/7,20);

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bobObject1 = new Bob (startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2 = new Bob (startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3 = new Bob (startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4 = new Bob (startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new Bob (startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope = new Rope(bobObject1.body, roof.body, -bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body, roof.body,0,0);
	rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2,0);


	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}


