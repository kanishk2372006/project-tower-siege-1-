class Ball {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              frictionAir: 2
           
              
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("polygon.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
       
  
      }
      
      display()
      {
              
              var ballPos=this.body.position;		
              push()
              translate(ballPos.x, ballPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,100,100)
              pop()
              
      }
  }
  