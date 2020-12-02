class Boy{
    constructor(x,y,width,height){
      var options = {
         isStatic : true
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      this.image=loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){
      var pos3 =this.body.position;
      //rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,pos3.x,pos3.y,this.width, this.height)
      //rect(pos3.x, pos3.y, this.width, this.height);
   }
}