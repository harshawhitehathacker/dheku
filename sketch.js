var bullet,wall;
var thickness,weight,speed;

function setup(){
createCanvas(1600,400);
speed = random(223,321);
weight = random(25,30);

wall =createSprite(1200,200,60,100);
bullet = createSprite(500,200,50,50);

bullet.shapeColor = "white"
wall.shapeColor = "gray"
bullet.velocityX=5;
thickness=random(22,83);


}


function draw(){
background("black");
if(hascollided(bullet,wall)){
bullet.velocityX=0;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10){
  wall.shapeColor="red";
}
if(damage<10){
  wall.shapeColor="green";
}
}
drawSprites();
}


function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>= wallLeftEdge){

    return true;
  }else{
  
return false;
}
}






