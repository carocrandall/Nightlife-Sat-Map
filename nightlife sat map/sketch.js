var googleMap;
var d;

function setup() {
  createCanvas(2000,1000);
  googleMap = loadImage("assets/sat map.png")
  
}

function draw() {
 noCursor();
 stroke(255,255,0,60);
 image(googleMap, 0,0, 1850, 1250);
 d = 70;
fill(255,255,0,40);
 ellipse(mouseX, mouseY, d, d);
fill(255,255,0);
 ellipse(mouseX, mouseY, d/7, d/7)
 

}

