// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//All Variables
var boxes = [],ground1,ground2,hexagon,hasDragged = false,score = 0;

function setup() {

    createCanvas(800, 500);

    engine = Engine.create();
    world = engine.world;

    //Give values to variables
    ground1 = new Ground(300, 200, 100, 20);
    ground2 = new Ground(700, 350, 80, 20);

    hexagon = new Hexagon(100, 100);

    var center = { x: 310, y: 160 };
    var colors = {}; 

    var index = 0;

    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < x; y++) {
            boxes[index] = new Box(center.x + (x*10), center.y - (y*20),10,20);
            index++;
            boxes[index] = new Box(center.x - (x * 10), center.y - (y * 20),10,20);
            index++;
        }
    }

    var center = { x: 765, y: 310 };

    for (var x = 0; x < 14; x++) {
        for (var y = 0; y < 6; y++) {
            
            boxes[index] = new Box(center.x - (x * 10), ((center.y - (y * 20))),10,20);
            index++;

        }
    }

    boxes[index] = new Box(270, 90,90,10);
}

function draw() {
    background("white");
    Engine.update(engine);

    //display objects
    ground1.display();
    ground2.display();

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display("red");
    }

    hexagon.display();

    text("Score : " + score, 700 ,50);
}

function keyPressed() {
    if (keyCode == 32) {
        hexagon.body = null;
        hexagon = new Hexagon(100, 100);
        hasDragged = false;
    }
}

function mouseDragged() {
    if (hasDragged)
        return;
    Body.setPosition(this.hexagon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    hasDragged = true;
    this.hexagon.fly();
}
