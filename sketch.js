// bien trong code
var fireworks = [];
var gravity;
var time = 1;
var number = 1;
var add = 237;
var heart;
var typing;

// bien cua preLoad
var song;
var font1;

// bien lam nhiem vu displayText
var _pos = [100];
for(var i = 0; i< 101; i++) _pos[i] = 1;
var second = 0;

// bien hien thi text
var column = 100;
var exrow = 45;

function preload() {
  song = loadSound("https://mtinfinity.github.io/Minfinity/payday.mp3");
  typing = loadSound("https://mtinfinity.github.io/Minfinity/typing.mp3");
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
  if(second > 7) coutUp();
  textOnScreen();
  time += 1;
  if(time % 250 == 0) second += 1;
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

function displayText(n, x, y, z) {
  noStroke();
  fill(255);
  textFont("Amatic SC", 40);
  text(n.substring(0, _pos[z]), x, y);
  if(_pos[z] < n.length) _pos[z]++;
  else _pos[z] = n.length; 
}

function textOnScreen() {
  textFont("Amatic SC", 40);
  noStroke();
  fill(255);
  if(second < 4) {
    displayText("Hey ...", column, 100, 0);
    if(second > 1) displayText("Let's start a journey ...", column, 100 + exrow, 1);
    if(second > 2) displayText("It's a short journey, but ... ", column, 100 + exrow*2, 2);
    if(second > 3) displayText("I hope you like it :heart:", column, 100 + exrow*3, 3)
  }

  if(second > 4 && second < 15) {
    if(second > 4) displayText("Bắt đầu từ 27-01-2017", column, 100, 4);
    if(second > 5) displayText("Hôm nay đã là 07-10-2018 ...", column, 100 + exrow, 5);
    if(second > 6) displayText("Thế là đã qua ...", column, 100 + exrow*2, 6)
    if(second > 7) {
      text(number + " ngày", column, 100 + exrow*3);
	    if(number >= 365) displayText("là một năm ...", column, 100 + exrow*4, 7);
      if(number >= 600) displayText("cộng thêm với " + add + " ngày !", column*3 - 30, 100 + exrow*4, 8);
    }
  }

  //if(second > 15 && second < 40) {}
}

