class Ground {
    constructor(x, y, width, height) {
        this.vals = { width: width * 2, height: height };
        this.body = Bodies.rectangle(x, y, width * 2, height, { isStatic: true });
        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(-this.vals.width/2,0, this.vals.width, this.vals.height);
        pop();
    }
}