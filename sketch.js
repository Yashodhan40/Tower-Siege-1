const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var polygon1
function preload(){
  poly_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(1050,800);
  engine=Engine.create();
  world=engine.world;  
  ball =Bodies.circle(50,200,20);
  World.add(world,ball);
  box1=new Box(300,300,40,40);
  box2 = new Box(340,300,40,40);
  box3 = new Box(380,300,40,40);
  box4 = new Box(420,300,40,40);
  ground1 = new Ground(400,500,290,5);
  ground2 = new Ground(750,350,250,5);
  ground3 = new Ground(20,790,1000,20);
  ground4 = new Ground(200,790,10000,20);
  //polygon1 = new polygon(100,200,10,10);
  string1 = new rubber(this.ball,{x:200,y:400});
  box5 = new Box(460,300,40,40);
  box6 = new Box(400,200,40,40);
  box7 = new Box(450,200,40,40);
  box8 = new Box(370,220,40,40);
  box9 = new Box(400,170,40,40);
  box10 = new Box(420,170,40,40);

  box11 = new Box(670,100,40,40);
  box12 = new Box(710,100,40,40);
  box13 = new Box(750,100,40,40);
  box14 = new Box(790,100,40,40);
  box15 = new Box(840,100,40,40);
  box16 = new Box(695,60,40,40);
  box17 = new Box(730,60,40,40);
  box18 = new Box(775,60,40,40);
  box19 = new Box(815,60,40,40);
  box20 = new Box(700,20,40,40);
  box21 = new Box(745,20,40,40);
  box22 = new Box(795,20,40,40);
  box23 = new Box(730,-20,40,40);
  Engine.run(engine);
}
function draw() {
  background(255);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  
  //polygon1.display();
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  fill("gold");
  imageMode(CENTER);
  image(poly_img,ball.position.x,ball.position.y,40,40);
  string1.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:100,y:450});

}

function mouseReleased(){
  string1.fly();
}
function keyPressed(){
  if (keyCode===32){
    string1.attach(this.ball);
  }
}

