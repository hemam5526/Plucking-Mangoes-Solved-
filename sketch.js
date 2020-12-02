
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, tree, boy, stone, render ;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
function preload()
{
  boy=loadImage("boy.png");	
}

function setup() {
	createCanvas(1300, 600); //increased the canvas size also 


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2, 600, width,20) //try to add it like this, in formula form
tree = new Tree(1050,580); //changed
//boy = new Boy(150,630,250,250) //no need to create a boy object, you can use it just like an image, it will not //onstruct the stone then 
stone = new Stone(235,420,30);
slingshot = new Slingshot(stone.body,{x:235,y:420}); //positions changed

///changed a little bit 
mango1 = new Mango(1100,100,30);
mango2 = new Mango(1170,130,30);
mango3 = new Mango(1010,140,30);
mango4 = new Mango(1100,70,30);
mango5 = new Mango(1000,230,30);
mango6 = new Mango(900,230,40);
mango7 = new Mango(1140,150,40);
mango8 = new Mango(1100,230,40);
mango9 = new Mango(1000,70,30);
mango10 = new Mango(1200,200,40);
mango11 = new Mango(1120,50,40);
mango12 = new Mango(900,160,40);

render = Render.create({
  element: document.body,
  engine: engine, 
  options: {
    width: 1300,
    height: 600,
    wireframes: false
  }
});

Engine.run(engine);
//Render.run(render);
  
}


function draw() {
  //rectMode(CENTER);
  background('#E6E6E6');

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  ground.display();
  tree.display();
  //boy.display();
  stone.display();
  slingshot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();

  //drawSprites(); //not needed as we are not working with sprites in this


detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x : mouseX, y:mouseY})
}

function mouseReleased(){
   slingshot.fly();
}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  slingshot.attach(stone.body);
	}
  }



function detectollision(lstone,lmango)
{
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
//function dist is used to calculate the distance betwee two objects/two points
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



