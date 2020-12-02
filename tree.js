class Tree{
    constructor(x,y){
//keeping width height same
//also creating three bodies altogether in here, just like the dustbin project, //using dustbin class
      
      
                this.x=x;
		this.y=y;
		this.dustbinWidth=450;
		this.dustbinHeight=600;
		this.wallThickness=10;
      this.image=loadImage("tree.png");
                this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
      
                World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }
    display(){
      var pos2 =this.bottomBody.position;
            push();
            translate(pos2.x,pos2.y);
            //rectMode(CENTER);
            imageMode(CENTER);
             image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
	   pop();
      //rect(pos2.x, pos2.y, this.width, this.height);
   }
}
