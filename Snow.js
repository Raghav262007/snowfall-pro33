//Bodies.circle(x, y, this.r, options);
class Snow {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
    this.r = 10;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("snowflake img.png");

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}
