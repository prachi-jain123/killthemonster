const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(1400, 900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 700, 2000, 20);

  hero = new Hero(300,500,110);
  rope = new Rope(hero.body, { x: 100, y: 465 });
  monster = new Monster(900,700,120);

  box1 = new Box(750, 680, 30, 40);
  box2 = new Box(755, 680, 30, 40);
  box3 = new Box(760, 680, 30, 40);
  box4 = new Box(750, 680, 30, 40);
  box5 = new Box(755, 680, 30, 40);
  box6 = new Box(760, 670, 30, 40);
  box7 = new Box(750, 670, 30, 40);
  box8 = new Box(755, 670, 30, 40);
  box9 = new Box(760, 670, 30, 40);
  box10 = new Box(750, 670, 30, 40);
  box11 = new Box(755, 660, 30, 40);
  box12 = new Box(760, 660, 30, 40);
  box13 = new Box(750, 660, 30, 40);
  box14 = new Box(755, 660, 30, 40);
  box15 = new Box(760, 660, 30, 40);
  box16 = new Box(750, 650, 30, 40);
  box17 = new Box(755, 650, 30, 40);
  box18 = new Box(760, 650, 30, 40);
  box19 = new Box(750, 650, 30, 40);
  box20 = new Box(755, 650, 30, 40);
  box21 = new Box(760, 640, 30, 40);
  box22 = new Box(750, 640, 30, 40);
  box23 = new Box(755, 640, 30, 40);
  box24 = new Box(760, 640, 30, 40);
  box25 = new Box(750, 640, 30, 40);
  box26 = new Box(755, 640, 30, 40);

Engine.run(engine);
}

function draw() {
  background(bg);
  ground.display();
  stroke (15);
  fill ("purple");
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
  box24.display();
  box25.display();
  box26.display();
  
  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  //set the position of hero when mouse is dragged
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly();
}
