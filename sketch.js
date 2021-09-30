const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1, stand2, stand3;
var ball;
var slingShot;
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
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(700, 325, 150, 10);
 
  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);

  //nivel 1.2
  block17 = new Block(640, 175, 30, 40);
  block18 = new Block(670, 175, 30, 40);
  block19 = new Block(700, 175, 30, 40);
  block20 = new Block(730, 175, 30, 40);
  block21 = new Block(760, 175, 30, 40);

  //nivel 2.2
  block22 = new Block(670, 135, 30, 40);
  block23 = new Block(700, 135, 30, 40);
  block24 = new Block(730, 135, 30, 40);

  //nivel 3.2
  block25 = new Block(700, 105, 30, 40);

  //nivel 1.3
  block26 = new Block(670, 300, 30, 40);
  block27 = new Block(700, 300, 30, 40);
  block28 = new Block(730, 300, 30, 40);

  //nivel 2.3
  block29 = new Block(700, 270, 30, 40);

  ball = new Polygon(150, 200, 20);
  slingShot = new Slingshot(ball.body, {x: 150, y: 200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");

  ball.display();  
  slingShot.display();

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  
  strokeWeight(2);
  stroke(15);
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
  block16.display();
 
  fill(0,255,152);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  
  block29.display();

  fill(255,152,0);
  block22.display();
  block23.display();
  block24.display();

  fill(152,0,255);
  block25.display();

  block26.display();
  block27.display();
  block28.display();
  
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(ball.body, {x: 150, y: 150});
    slingShot.attach(ball.body);
  }
}