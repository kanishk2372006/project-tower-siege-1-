const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var balls;
var rope;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
 
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
  balls = new Ball(100,300,250);
  rope = new Rope(balls.body, { x: 500, y: 50 });
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//new blocks layer 1 
  block17 = new Block(610,190,30,40);
  block18 = new Block(640,190,30,40);
  block19 = new Block(670,190,30,40);
  block20 = new Block(700,190,30,40);
  block21 = new Block(730,190,30,40);
  block22 = new Block(750,190,30,40);
  block23 = new Block(780,190,30,40);
  //new blocks layer 2
  block29 = new Block(610,180,30,40);
  block24 = new Block(640,180,30,40);
  block25 = new Block(670,180,30,40);
  block26 = new Block(700,180,30,40);
  block27 = new Block(730,180,30,40);
  block28 = new Block(750,180,30,40);
  //new blocks layer 2
  block30= new Block(610,170,30,40);
  block31 = new Block(640,170,30,40);
  block32 = new Block(670,170,30,40);
 // new blocks last layer
 block33 = new Block(610,160,30,40);
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  balls.display();
  fill("pink")
  rope.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");

  fill("purple")
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  fill(0, 0, 255)
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  
  fill("#01baef")
  block30.display();
  block31.display();
  block32.display();
  
   fill("#045de9");
  block33.display();
}
function mouseDragged() {
  
  Matter.Body.setPosition(balls.body, { x: mouseX, y: mouseY});
}