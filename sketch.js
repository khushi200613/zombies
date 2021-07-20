const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
 var ground1
 var ground2
 var ground3
 var bridge
 var chain
 var joint
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
 ground1 = new Base(1200/2, 600-20,1200,10)
 ground2 = new Base(100,400,200,100)
 ground3 = new Base(1100,400,200,100)
 bridge = new  Bridge(10,{x:150,y:400})
 joint = Bodies .rectangle(920,400,20,20)
 Composite.add(bridge.body,joint)
 chain = new Link (bridge,joint)
 rectMode(CENTER);
}

function draw() {
  background(51);
  Engine.update(engine);
  ground1.display()
  ground2.display()
  ground3.display()
  bridge.show()

}
