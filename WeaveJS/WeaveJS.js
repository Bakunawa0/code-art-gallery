let x = 400;
let y = 300;

let xSpeed = 4;
let ySpeed = 3.1;
let bounce = -1; // -1 is on, 1 is off
function setup() {
  createCanvas(1280, 1024);
}


function draw() {
  //background(0);
  fill(10, random(128, 255), random(128));
  
  if(x > width || x < 0){
    xSpeed *= bounce;
  }
  x += xSpeed;
  
  if(y > height || y < 0){
    ySpeed *= bounce;
  }
  y += ySpeed;
  
  if(mouseX <= 0){
    bounce = 1;
  } else{
    bounce = -1;
  }
  
  ellipse(x, y, 50, 50);
}
