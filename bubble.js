class Bubble {

  constructor(tempX, tempY, tempR) {
    this.x = tempX; //x coordinate for bubble
    this.y = tempY; //y coordinate for bubble
    this.r = tempR; //radius for bubble
    this.colourR = 0; //red for bubble
    this.colourG = 0; //green for bubble
    this.colourB = 0; //blue for bubble
    this.whatColour = "black"
    this.lastBubble = false;
  }

  //controls movement of bubbles
  move() {

    const vibrateSpeed = 3;

    //bubbles vibrates randomly at selected speed above
    this.x += random(-vibrateSpeed, vibrateSpeed);
    this.y += random(-vibrateSpeed, vibrateSpeed);

    //bubbles cant go outside of canvass (x coordinate)
    if (this.x > width) {
      this.x -= 5
    }
    if (this.x < 0) {
      this.x += 5
    }
    //bubbles cant go outside of canvass (y coordinate)
    if (this.y > height) {
      this.y -= 5
    }
    if (this.y < 0) {
      this.y += 5
    }

  }

  //this lets the bubbles come out
  show() {
    stroke(255);
    strokeWeight(2);
    fill(this.colourR, this.colourG, this.colourB);
    ellipse(this.x, this.y, this.r * 2);
  }


  //this changes the colour of the bubbles if clicked
  colorChange() {
    let colorRandom = random(0, 3);
    if (colorRandom > 2) {
      this.colourR = 255;
      this.colourG = 0;
      this.colourB = 0;
      this.whatColour = "red"
    } else if (colorRandom > 1) {
      this.colourR = 0;
      this.colourG = 255;
      this.colourB = 0;
      this.whatColour = "green";
    } else {
      this.colourR = 0;
      this.colourG = 0;
      this.colourB = 255;
      this.whatColour = "blue";
    }
  }

  //this checks whether the mouse is hovering over a bubble
  containCheck(pixel_x, pixel_y) {
    let d = dist(pixel_x, pixel_y, this.x, this.y);
    return (d < this.r)
  }


  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    return (d < this.r + other.r) 
  }


}