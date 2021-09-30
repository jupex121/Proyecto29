class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    attach(body) {
        this.slingshot.bodyA = body;
    }

    fly() {
        this.slingshot.bodyA = null;
    }

    display() {
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(84,37,15);

            if(pointA.x > 250) {
                strokeWeight(7);
                line(pointA.x -40, pointA.y, pointB.x -30, pointB.y);
                line(pointA.x -40, pointA.y, pointB.x +10, pointB.y -3);
            }
            else {
                strokeWeight(3);
                line(pointA.x +5, pointA.y, pointB.x -30, pointB.y);
                line(pointA.x +5, pointA.y, pointB.x +10, pointB.y -3);
            }
            pop();
        }

    }
    
}