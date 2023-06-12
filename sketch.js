
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane
var particula1, particula2, particula3, particula4, particula5
var particula6, particula7, particula8, particula9, particula10
var rotator1, rotator2, rotator3;
var block1, block2



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options = {
		isStatic: true
	}

	plane = Bodies.rectangle(600, height, 1200, 20, plane_options)
	World.add(world, plane);
	block1 = Bodies.rectangle(100, 400, 150, 20, plane_options);
	World.add(world, block1)
	block2 = Bodies.rectangle(400, 400, 150, 20, plane_options);
	World.add(world, block2)

	var particle_options1 = {
		restitution: 0.4,
		friction: 0.2
	}
	
	var particle_options2 = {
		restitution: 1.0,
		friction: 0.4
	}

	var particle_options3 = {
		restitution: 2.0,
		friction: 1.0
	}

	particula1 = Bodies.circle(240, 10, 10, particle_options1)
	World.add(world, particula1);
	particula2 = Bodies.circle(240, 10, 10, particle_options2)
	World.add(world, particula2);
	particula3 = Bodies.circle(245, 10, 10, particle_options1)
	World.add(world, particula3);
	particula4 = Bodies.circle(245, 10, 10, particle_options2)
	World.add(world, particula4);
	particula5 = Bodies.circle(240, 10, 10, particle_options3)
    World.add(world, particula5);

	var rotator_options = {
		isStatic: true
	}
	

	Engine.run(engine);
	fill("brown");

}

function draw() {

	rectMode(CENTER);
	background("lightgreen");
	Engine.update(engine);


	rect(plane.position.x, plane.position.y, 1200, 20);
	rect(block1.position.x, block1.position.y, 150, 20);
	rect(block2.position.x, block2.position.y, 150, 20);

	ellipse(particula1.position.x, particula1.position.y, 10)
	ellipse(particula2.position.x, particula2.position.y, 10)
	ellipse(particula3.position.x, particula3.position.y, 10)
	ellipse(particula4.position.x, particula4.position.y, 10)
	ellipse(particula5.position.x, particula5.position.y, 10)
	
9;


}




