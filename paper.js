class paper {
    constructor(x, y, r ) {
      var options = {
          isStatic:false,
          restitution : 0.3,
          friction : 0.5,
          density  : 1.2
      }
      this.r = r;
      this.image = loadImage ("paper.png")
      this.body = Bodies.circle(x, y, this.r/2, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
         imageMode(CENTER)
      fill("red");
      image(this.image,pos.x,pos.y, this.r, this.r);
    }
  };
