const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

var backgroundimg;
var snowflakes=[];

function preload() {
  //snowflakes = loadImage("snow4.webp");
  backgroundimg = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world; 
  ground = new Ground(width/2,height,width,20);

}

function draw() {
  background(backgroundimg)  
  drawSprites();  
  Engine.update(engine);
  ground.display();

if(frameCount%60==0){
    snowflakes.push(new Snowflakes(random(50, 400), 0,50,50));

}
  for (var j = 0; j < snowflakes.length; j++) {
  
    snowflakes[j].display();

}
}