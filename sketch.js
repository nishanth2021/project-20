var fixrect,moverect;



function setup() {
  createCanvas(800,400);
 fixrect= createSprite(400, 200, 50, 50);
moverect= createSprite(200,400,50,50)
fixrect.shapeColor="red";
moverect.shapeColor="red";
}

function draw() {
  background(255,255,255);
moverect.x=World.mouseX;
moverect.y=World.mouseY;
if(moverect.x-fixrect.x<fixrect.width/2+moverect.width/2&&
  fixrect.x-moverect.x<fixrect.width/2+moverect.width/2&&
  moverect.y-fixrect.y<fixrect.height/2+moverect.height/2&&
  fixrect.y-moverect.y<fixrect.height/2+moverect.height/2){
  moverect.shapeColor="green";
  fixrect.shapeColor="green";
}
else{
  fixrect.shapeColor="red";
moverect.shapeColor="red";
}
  drawSprites();
}