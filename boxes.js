
class Box  {
    constructor(x, y, width, height){

        var options = {

            isStatic: false,
            restitution:0.8,
            friction:1.0,
            density:0.5
        }

        this.visibility = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){

    // console.log(this.body.speed)   
     if(this.body.speed<3){
    var pos =this.body.position;
    push()
    strokeWeight(3)
    rectMode(CENTER);
    fill("cyan");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
     }
     else{
     push();

     World.remove(world,this.body)
     this.visibility = this.visibility-5
     tint(255,this.visibility);
     pop();

     }
  
  };

  score(){

    if(this.visibility<0 && this.visibility >- 105){

        score++
    }
  }
}
  