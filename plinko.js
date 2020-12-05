class Plinko{
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }

        this.radius = 10;

        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, 10, 10);
        pop();
    }
}