// JavaScript source code
class Box {
    
    constructor(x, y, width, height) {
        this.scoreAdded = false;
        this.width = width;
        this.height = height;
        this.pos = { x: x, y: y };
        this.body = Bodies.rectangle(x, y, 10, 20);
        World.add(world, this.body);
        this.visibility = 255;
        this.image = loadImage("rectangle.bmp");
    }

    display() {
        if (this.body == null)
            return;

        if (this.body.speed < 4) {
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
        else {
            if (!this.scoreAdded) {
                score++;
                this.scoreAdded = true;
            }
            World.remove(world, this.body);

            this.body.speed = 10;
            this.visibility = this.visibility - 5;

            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            tint(255, this.visibility);
            image(this.image, 0, 0, this.width, this.height);
            pop();

            if (this.visibility < 1) {
                World.remove(world, this.body);
                this.body = null;
            }
        }
    }
}