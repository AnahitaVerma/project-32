
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0
var backgroundImg,platform;

function preload()
{
  GetBackground();
}

function setup() {
	createCanvas(1279, 609);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1 = new Ground(650,606,1375,50)
stage1  = new Ground(500,455,240,15)
stage2  = new Ground(970,290,290,15)

box1    = new Box(420,425,40,50)
box2    = new Box(460,425,40,50)
box3    = new Box(500,425,40,50)
box4    = new Box(540,425,40,50)
box5    = new Box(580,425,40,50)
box6    = new Box(460,375,40,50)
box7    = new Box(500,375,40,50)
box8    = new Box(540,375,40,50)
box9    = new Box(500,325,40,50)



box10   = new Box(910,260,40,50)
box11   = new Box(950,260,40,50)
box12   = new Box(990,260,40,50)
box13   = new Box(1030,260,40,50)
box14   = new Box(1070,260,40,50)
box15   = new Box(870,260,40,50)
box16   = new Box(910,210,40,50)
box17   = new Box(950,210,40,50)
box18   = new Box(990,210,40,50)
box19   = new Box(1030,210,40,50)
box20   = new Box(950,160,40,50)
box21   = new Box(990,160,40,50)
box22   = new Box(970,110,40,50)


polygan1 = new Polygan(100,380,20)

slingshot = new SlingShot(polygan1.body,{x:100, y:380});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
  background(backgroundImg);
  textSize(20)
  fill("orange")
  text("SCORE : "+score ,220,50);

  ground1.display();
  stage1.display();
  stage2.display();
  polygan1.display();
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

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
 
  polygan1.display();
  slingshot.display();
 
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygan1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

  if(keyCode == 32){

      slingshot.attach(polygan1.body)
  }
}

async function GetBackground(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responsejson = await response.json();
  console.log(responsejson.datetime)
  var datetime = responsejson.datetime
  var hour = datetime.slice(11,13)

  if(hour>=6 && hour<=19){

      bg="/bg.png"
  }
  else{

      bg = "bg2.jpg"
  }
   backgroundImg=loadImage(bg)
}

