const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball, ground, ceiling;
var wall1, wall2;
var collectible1, collectible2, collectible3, collectible4, collectible5, collectible6, collectible7, collectible8, collectible9, goldCollectible;
var platform, platform2, platWall1, platWall2;
var score = 0;
var world;

function setup(){
	createCanvas(1600,700);
	rectMode(CENTER)
	
	engine = Engine.create();
	world = engine.world;
	
	ball = new Paper(200,450,40);
	
	ground = new Ground(width/2,700,1400,20);

	ceiling = new Ground(width/2, 0,1400,20)

	wall1 = new Ground(100, 300,20,800);
	wall2 = new Ground(1500, 300,20,800); 

	platform = new Ground(750,325,300,15);
	platform2 = new Ground(750,125,50,5);

	platWall1 = new Ground(600,315,15,35);
	platWall2 = new Ground(900,315,15,35);

	//bottom
	collectible1 = new Collectible(700, 250, 25, 25);
	collectible2 = new Collectible(725, 250, 25, 25);
	collectible3 = new Collectible(750, 250, 25, 25);
	collectible4 = new Collectible(775, 250, 25, 25);
	collectible5 = new Collectible(800, 250, 25, 25);

	//middle
	collectible6 = new Collectible(725, 276, 25, 25);
	collectible7 = new Collectible(750, 276, 25, 25);
	collectible8 = new Collectible(775, 276, 25, 25);

	//top
	collectible9 = new Collectible(750, 302, 25, 25);

	//golden
	goldCollectible = new GoldCollectible(750, 100, 10,10)

  Engine.run(engine);
}
function draw(){
	rectMode(CENTER);
	background(0); 
	
	textSize(25);
	fill("lightgrey");
	stroke(15);
	text("score = "+ score,125,50);	

	textSize(15);
	fill("grey");
	stroke(15);
	text("arrow keys or wasd to move",125,80);
	text("collect all of the boxes to win", 125, 100);	
	

	ball.display();
	
	ground.display();
	
	wall1.display();
	wall2.display();
	
	ceiling.display();
	
	platform.display(); 
	platform2.display(); 
	platWall1.display();
	platWall2.display();

	collectible1.display();
	collectible2.display();
	collectible3.display();
	collectible4.display();
	collectible5.display();
	collectible6.display();
	collectible7.display();
	collectible8.display();
	collectible9.display();

	goldCollectible.display();
	
	collectible1.score();
	collectible2.score();
	collectible3.score();
	collectible4.score();
	collectible5.score();
	collectible6.score();
	collectible7.score();
	collectible8.score();
	collectible9.score();

	goldCollectible.score();
	
	win();
}

function keyPressed(){
	if(keyCode === 68 || keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:0});	
	}
	if(keyCode === 65 || keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:0});
	}
	if(keyCode === 87 || keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-50});
	}
	if(keyCode === 83 || keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:150});
	}
	
} 

function win(){
	if(score >= 15){
		
		textSize(100);
		stroke(15);
		fill("lightgrey");	
		text("YOU WIN", 525, 450);

		textSize(25);
		stroke(0);
		fill("lightgrey");	
		text("press ctrl+r to reset boxes", 600, 475);
	}
}
