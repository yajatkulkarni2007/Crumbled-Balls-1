class Dustbin{
    constructor(x,y,width,height){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,width,20,options);
this.x=x
this.y=y;
this.width=width;
this.height=20;
World.add(this.body,World);
    }
    display(){
        fill("red");
    }
}