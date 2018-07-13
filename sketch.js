var fireworks = [];
var gravity;
var time = 1;
var number = 1;
var add = 235;
var song;
var font1;
var _pos = [100];
var _incre = [100];
for(var i = 0; i< 101; i++) {
  _pos[i] = 0;
  _incre[i] = 0;
}

function preload() {
  song = loadSound("https://mtinfinity.github.io/Minfinity/payday.mp3");
  font1 = loadFont("https://mtinfinity.github.io/Minfinity/ShadowsIntoLight.ttf");
}

function setup() {
  createCanvas(1350, 645);
  colorMode(RGB);
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(4);
  song.loop();
}

function draw() {
  background(0);
  fire();
  coutUp();
  time += 1;
}

function fire() {
  colorMode(HSB);
  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function coutUp() {
  textFont("font1");
  noStroke();
  fill(random(150,255));
  textSize(25);
  if(time < 1200) {
    displayText("Bắt đầu từ 27-01-2016", 100, 100, 0);
    if(time > 600) text("Hôm nay đã là 07-10-2018 ...", 100, 130);
  }
  else if(time < 2600) {
	text(number, 100, windowHeight/5);
	if(number > 365) text("một năm dài", windowWidth/5, windowHeight*2/5 - 50);
	if(number >= 600) text("days", windowWidth*2/5, windowHeight*2/5 - 50);	
	if(number >= 600) text("with extra   " + add, windowWidth*1.5/5, windowHeight*2/5 - 50);
	if(number <= 50) {if(time % 5 == 0) number += 1;}
	else if(number <= 100) {if(time % 4 == 0) number += 1;}
	else if(number <= 150) {if(time % 4 == 0) number += 3;}
	else if(number <= 200) {if(time % 3 == 0) number += 3;}
	else if(number <= 250) {if(time % 2 == 0) number += 3;}
	else if(number <= 400) {if(time % 1 == 0) number += 4;}
	else if(number <= 500) {if(time % 2 == 0) number += 3;}
	else if(number <= 550) {if(time % 3 == 0) number += 2;}
	else if(number <= 600) {if(time % 7 == 0) number += 2;}
	else if(number <= 605) {if(time % 20 == 0) {number += 1; add += 1;}}
	else if(number <= 610 ) {if(time % 30 == 0) {number += 1; add +=1;}}
	else if(number <= 617) {if(time % 50 == 0) {number += 1; add += 1;}}
  else {number = 618; add = 253;}
  }
}

function displayText(n, x, y, de) {
  //textFont("font1"); 
  noStroke();
  fill(255);
  textSize(25);
  text(n.substring(0, _pos[de] + 1), x + _incre[de], y);
  _pos[de]++; _incre[de] += 2;
  if(_pos > n.length) {_pos = 0; _incre = 0;}
}


