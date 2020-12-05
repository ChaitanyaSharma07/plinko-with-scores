
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground; 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var world;
var turn = 0;

var engine, world;

var gameState = "play";
var particle;

var score  = 0;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800)

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(450, 795, 900, 10)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

  Engine.run(engine);
  
}


function draw() {
  background(0)

  stroke("white");
  fill("white");
  text("for slow motion press s", 700, 10);
  text("to go back to normal press a", 680, 30);


  ground.display();

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
    }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
    }

  for(var j=0;j<plinkos.length;j++){
        plinkos[j].display();
    }

    for(var j=0;j<plinkos.length;j++){
      plinkos[j].display();
      }
  
    for(var j=0;j<plinkos.length;j++){
          plinkos[j].display();
      }
      if (particle != null) {
        particle.display();
  
        if (particle.body.position.y > 760) {
          if (particle.body.position.x < 300) {
            score = score + 500;
            particle = null;
            if (turn >= 5) gameState = "end";
          }
        }
      }
  
      if (particle != null) {
        particle.display();
  
        if (particle.body.position.y > 760) {
          if (particle.body.position.x > 301 && particle.body.position.x < 600) {
            score = score + 100;
            particle = null;
            if (turn >= 5) gameState = "end";
          }
        }
      }
  
      if (particle != null) {
        particle.display();
  
        if (particle.body.position.y > 760) {
          if (particle.body.position.x > 601 && particle.body.position.y < 900) {
            score = score + 200;
            particle = null;
            if (turn >= 5) gameState = "end";
          }
        }
      }

    if (gameState == "play") {
      if (keyDown("s")) {
        particle.body.frictionAir = 0.7
      } else if (keyDown("a")) {
        particle.body.frictionAir = 0.01;
      }
    }
    
    
      
    if (gameState == "end") {
      stroke("blue");
      fill("blue");
      text("GAME OVER!!!", 400, 400);
    }

  stroke("white");
  fill("white");
  text("SCORE: " + score, 10, 10);

  textSize(20)
  text("500", 25, 520);
  text("500", 105, 520);
  text("500", 195, 520);
  text("100", 265, 520);
  text("100", 345, 520);
  text("100", 425, 520);
  text("100", 505, 520);
  text("200", 585, 520);
  text("200", 665, 520);
  text("200", 745, 520);
  text("200", 825, 520);
  
	drawSprites();
  }
  

function keyPressed() {
  if (keyCode == 32) {
    if (gameState != "end") {
      turn = turn + 1;
      particle = new Particle(Math.round(random(10, 790)), 10, 10, 10);
      particle.display();
      
    }

  }
}

