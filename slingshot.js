class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1   //code added
        }
        
        this.bodyA=bodyA; //code added
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
      if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }

    fly(){
        this.sling.bodyA = null;
    }
         
 //to attach the stone back to the sling
       attach(body){
		this.sling.bodyA=body;
	}

    
}