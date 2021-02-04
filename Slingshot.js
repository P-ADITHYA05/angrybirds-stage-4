class SlingShot{
    constructor(bodyA, pointB){
        //declaring the options
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //creating constraints between points a and b
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //loading the images
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }
    //making the bird launch when the mouse key is released
    fly(){
        this.sling.bodyA = null;
    }
    //function display
    display(){
        //making the images for the sling shot 
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //only if something in bodyA displayed a line
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
            //making the line thicker when moved right and thinner when moved to left
            if(pointA.x>200){
                strokeWeight(7);
                line(pointA.x-25, pointA.y, pointB.x-25, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);

            }
            //
            else{
                strokeWeight(4);
                line(pointA.x-25, pointA.y, pointB.x-25, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
            }
        }
    }
    
}