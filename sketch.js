const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object,ground;

function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;
 
 var boptions = {
  restitution:1
}
 object=Bodies.circle(200,50,30,boptions);
 World.add(world,object);
 console.log(object);

 var goptions = {
   isStatic:true
 }
 ground=Bodies.rectangle(400,350,800,20,goptions);
 World.add(world,ground);
}
function draw() {
  background(0);  
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,30,30);

  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,800,20);
  
}