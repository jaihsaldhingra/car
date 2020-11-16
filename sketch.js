
var car,wall
var speed,weight
var deformation


function setup() {
  createCanvas(800,400);
  car=createSprite(750,200,50,50)
speed=random(-55,-90)
weight=random(400,1500)
wall=createSprite(50,200,60,height/2)

deformation=0.5*weight*speed*speed/22500
}

function draw() {
  background(255,255,255);  
 
 
  car.velocityX=speed;
  if (deformation<1057000){
car.shapeColor=("red")


  }
  if (deformation<1059000){
    car.shapeColor=("yellow")
    
    
      }
      if (deformation>1059000){
        car.shapeColor=("blue")
        
        
          }
  drawSprites();
  
}