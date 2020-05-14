var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400,1500);
  car = createSprite(50,200,40, 40);
  wall = createSprite(1400, 200, 60, height/2);
  wall.shapeColor = "grey";
  car.shapeColor = "white";
  car.velocityX = speed;
}

function draw() {
  background(0);  
if(car.collide(wall)) {
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/2;
if(deformation > 180)
{
  car.shapeColor = color(255, 0, 0);
}
if (deformation > 100 && deformation < 180)90
{
  car.shapeColor = color(230, 230, 0);
}
if (deformation < 100)
{
  car.shapeColor = color(0, 255, 0);
  }
}
console.log(deformation);
  drawSprites();
}