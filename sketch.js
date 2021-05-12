const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var backgroundImg;
var snowmanImg, snowmanImg2;
var girlImg, girlSprite;

var snowflakes = [];

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  snowmanImg = loadImage("snowman img.png");
  snowmanImg2 = loadImage("snowman img 2.png");
  girlImg = loadImage("girl img.png");
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  var snowman = createSprite(730, 320, 50, 50);
  snowman.addImage("snowman", snowmanImg);
  snowman.scale = 0.3;

  var snowman2 = createSprite(100, 320, 50, 50);
  snowman2.addImage("snowman2", snowmanImg2);
  snowman2.scale = 0.3;

  girlSprite = createSprite(480, 320, 50, 50);
  girlSprite.addImage("girl", girlImg);
  girlSprite.scale = 0.3;
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if (frameCount % 20 === 0) {
    snowflakes.push(new Snow(random(20, 770), 10));
  }

  for (var a = 0; a < snowflakes.length; a++) {
    snowflakes[a].display();
  }

  keypressed();
  drawSprites();
}

function keypressed() {
  if (keyCode === 39) {
    girlSprite.x = girlSprite.x + 2;
  } else if (keyCode === 37) {
    girlSprite.x = girlSprite.x - 2;
  }
}
