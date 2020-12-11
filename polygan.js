class Polygan
{
    constructor(x, y) 
    {
        var options = {
           
          isStatic: false,
          restitution: 0.1,
          friction:  0.5,
          density: 0.5
            
        }

      this.body = Bodies.circle(x, y,15,options);
      this.image = loadImage("polygon.png");
      
        this.x = x;
        this.y = y;
        this.radius = 35;

      World.add(world, this.body);
      
}
display()
{
    var pos = this.body.position;
    imageMode(RADIUS);
        image(this.image, pos.x, pos.y, this.radius, this.radius);

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    push()

    translate (pos.x , pos.y)

    fill("orange");
  
   

 //   ellipse(0, 0, this.radius);

    pop()
  }


}