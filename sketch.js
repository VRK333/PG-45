var bg;
var Sol,Solimg;



function preload(){
bg = loadImage("soldier game bg.jpg");
Solimg = loadImage("Apna soldier.png");
}




function setup() {
  createCanvas(800,400);
  Sol = createSprite(50, 200, 50, 50);
  Sol.addImage(Solimg);
  Sol.scale = 0.5;
  //Sol.y = mouseY;
}

function draw() {
  background(bg);  
  drawSprites();
}