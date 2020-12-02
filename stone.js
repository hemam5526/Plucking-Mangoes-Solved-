class Stone{
    constructor(x,y,r){
      var options = {
         isStatic : false,
         restitution : 0,
         friction : 1,
         density : 1.2
      }
//code added
      this.x = x;
      this.y = y;
     this.r =r;
this.body = Bodies.circle(this.x, this.y, this.r/2, options)
      this.image=loadImage("stone.png");
      World.add(world, this.body);
    }
    
   
  display(){
  //var angle = this.body.angle;
  var pos5 =this.body.position;
   push();
   translate(pos5.x, pos5.y);
   // rotate(angle);
   imageMode(CENTER);
   image(this.image, 0,0, this.r*2, this.r*2);
//ask me in the class why do we give 0,0 here in the above line
   pop();
  }
}
