
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas( 1600 , 700);


	engine = Engine.create();
	world = engine.world;

    paper1 = new paper(200 , 450 , 70 )
    dustbin1 = new dustbin (1200 , 650)
    ground = new Ground (width/2 , 670 , width , 20 )


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  ground.display();
  dustbin1.display();
paper1.display();





  drawSprites();

}

  function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:283,y:-283});
  
	}
}



