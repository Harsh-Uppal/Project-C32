// JavaScript source code
class Hexagon {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 20, {}, 3);

        var slingOpts = {
            bodyA: this.body, pointB: { x: x, y: y }
        };

        this.starPos = { x: x, y: y };
        this.sling = Matter.Constraint.create(slingOpts);
        this.image = loadImage("polygon.png");

        World.add(world, this.body);
        World.add(world, this.sling);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, 35, 35);
        pop();

        if(this.sling.bodyA != null)
            line(this.body.position.x + 17.5, this.body.position.y + 17.5, this.starPos.x+17.5, this.starPos.y+17.5);
    }

    fly() {
        this.sling.bodyA = null;
    }
}