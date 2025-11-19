let sharkY = 0;
let sharkX = 0;
let sharkSpeed = 1;
let SharyArray = [];



function setup() {
  createCanvas(1920, 1080);
  frameRate(60)
  SpawnShark();
}

function draw() {
  background(220);
  cursor()
  Shark();
   

}




function Shark(){
  ellipse(sharkX, sharkY, 50);
  sharkX += sharkSpeed;

  if (sharkX > width + 50){
    SpawnShark();
  }

}

function SpawnShark(){
  sharkX = - 50;
  sharkY = random(50, height - 50);
}


