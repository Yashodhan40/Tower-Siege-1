class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0,
            
           // density:0.1,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
       // Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("cyan");
        strokeWeight(4);
        stroke("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}