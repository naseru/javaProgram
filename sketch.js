//there is a bubble.js class in another file. Click on the project folder

// push function. this one basically adds a new bubble without there needing a counter


let bubbles = [];
const startingBubbles = 10;
let highScore = startingBubbles; 
let img;

function preload(){
  img = loadImage('kitten.png');
  
}

function setup() {
  createCanvas(400, 400);
  
  
  //starting off bubbles
  for (let i = 0; i < startingBubbles; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 20);
    bubbles[i] = new Bubble(x, y, r);
  }

}

function mousePressed() {
  for (let bubble of bubbles) {
    if (bubble.containCheck(mouseX, mouseY)) {
      bubble.colorChange();
    }
  }
}

function mouseDragged() {
  let r = random(10, 20)
  let b = new Bubble(mouseX, mouseY, r)
  bubbles.push(b)

}


function draw() {
  background(0);
  image(img,mouseX-40,mouseY-150);
  
  for (let p of bubbles) {
    p.move();
    p.show();

  }

  // check to see if the bubbles pop
  for (let i = 0; i < bubbles.length; i++) {
    for (let k = 0; k < bubbles.length; k++) {

      if (bubbles[i].whatColour == bubbles[k].whatColour && bubbles[i].whatColour != "black" && i != k && bubbles[i].intersects(bubbles[k])) {
        if (i > k) {
          bubbles.splice(i, 1);
          bubbles.splice(k, 1);
        } else {
          bubbles.splice(k, 1);
          bubbles.splice(i, 1);
        }

      }
    }
  }
}