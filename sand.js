class Sand{ constructor(x,y,radius) {
   var options={ 
     restitution:0.3,
     friction:5,
     density:1
 }
    this.x=x;
    this.y=y;
    this.radius=radius 
   this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
   World.add(world, this.body); }

  display()

  { var sandpos=this.body.position;
   push()
   translate(sandpos.x, sandpos.y);
   rectMode(CENTER)
   strokeWeight(4);
   stroke("black");
   fill("red");
   ellipse(0,0,this.radius, this.r);
   pop() } 
 }