class Paper{
constructor(x,y,r){
var options={
    inStatic:true,
    restitution:0.3,
    density:1.2,
    friction:0.5
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2,options);
World.add(this.body,World)
}
display(){
   var paperpos= this.body.position;
   paperpos.x=paperpos.mouseX;
   paperpos.y=paperpos.mouseY;
   push();
   translate(paperpos.x,paperpos.y);
   rotate(angle);
   ellipse(0,0,this.r,this.r);
   pop();
   fill("red");
}
}