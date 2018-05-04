var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var w = window.innerWidth-9;
var h = window.innerHeight-20;
var engine = Engine.create();

var render = Render.create({
    element: document.body,
    engine: engine,
    options:{
    	width:w,
    	height:h,
    	showVelocity: true
    }
});

var otherAngle = Math.PI/10;

var ground = Bodies.rectangle(300, 550, 1000, 100, { isStatic: true,angle:otherAngle,friction:0});
var ground2 = Bodies.rectangle(1100,610,1600,100, {isStatic:true,angle:Math.PI,friction:0});
var wall = Bodies.rectangle(1865,500,100,1000, {isStatic:true,angle:Math.PI,friction:0});

function loadEv(){
World.add(engine.world, [ground]);
World.add(engine.world,[ground2]);
World.add(engine.world,[wall]);
Engine.run(engine);

Render.run(render);
}
var friction=0;
var angle = Math.PI/2;
var restitution =0.5;
var sizeH = 100;
var sizeV = 100;
var density = 0.001;
var frictionAir = 0.01;
function addBlock(e){
	World.add(engine.world,[Bodies.rectangle(e.clientX,e.clientY,sizeH,sizeV,{friction:friction, angle:angle, restitution:restitution, density:density, frictionAir:frictionAir})])
}
function setFriction(value){
	document.getElementById("frictionValue").innerHTML=value;
	friction=value;
	console.log(engine.world.bodies);
}

function setE(value){
	document.getElementById("eValue").innerHTML=value;
	restitution=value;
}

function setSizeH(value){
	document.getElementById("sizeValueH").innerHTML=value;
	sizeH=value;
}

function setSizeV(value){
	document.getElementById("sizeValueV").innerHTML=value;
	sizeV=value;
}


function setDensity(value){
	document.getElementById("densityValue").innerHTML=value;
	density=value;
}

function setFrictionAir(value){
	document.getElementById("frictionAirValue").innerHTML=value;
	frictionAir=value;
}

function setAngle(value){
	document.getElementById("angleValue").innerHTML=value+"°";
	angle= value*(Math.PI/180);
}
function setAngle2(value){
	document.getElementById("angleValue2").innerHTML=value+"°";
	Matter.Body.setAngle(ground,(value*Math.PI)/180);
}
function applyForce(){

}
