let player;
let start;
let pressedKeys = {};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  player = new Player(50, 820);
}

function draw() {
  background(220);
  push()
  fill(90)
  rect(0, 850, window.innerWidth, 150);
  pop()
  player.update();
  player.draw();

}

function keyPressed() { 
  pressedKeys[key] = true; 
}

function keyReleased() {
  delete pressedKeys[key];
}

// Create Player
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        
        this.speed = 4.5
        constrain(0, 650, window.innerWidth, 100);
    }

    update() {
      let movement = createVector(0,0);
      
      if(pressedKeys.a) {
        movement.x -= 1;
      }
      if(pressedKeys.d) {
        movement.x +=1;
      }
      movement.setMag(this.speed);

      this.x += movement.x;
      this.y += movement.y;

      this.x = constrain (this.x, 0, window.innerWidth);
    }

    draw() {
      fill(255, 0 ,0);
      circle(this.x, this.y, 60);
    }
}
// Bullets Spawn on click
// Enemies
// Collisions
// Score
// Losing condition
// Restart option'
// Sound Effects
// 