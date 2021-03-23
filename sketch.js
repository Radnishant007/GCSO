var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=("white");
  car.velocityX = speed;

}

function draw() {
  background("black");  
  if(car.collide(wall)){
    deformation=0.5*weight*speed*speed/22500
    if(deformation<=100){
     car.velocityX=0; 
     car.shapeColor=("green");
    }
    else if(deformation>100 && deformation<180){
      car.velocityX=0;
      car.shapeColor=("yellow");
    }
    else if (deformation>=180){
      car.velocityX=0;
      car.shapeColor=("red");
    }
  }
  drawSprites();
}