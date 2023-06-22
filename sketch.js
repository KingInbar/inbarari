let music;
let img;
let countdownDate;

function preload() {
  music = loadSound('berberian.mp3');
  img = loadImage('logo-1.jpg');
}

function playMusic() {
  music.loop();
}

function setup() {
  createCanvas(1800, 974);
  imageMode(CENTER);

 
  countdownDate = new Date('June 24, 2023');

  // Play the music
  playMusic();
}

function draw() {
  background(203, 189, 173);

  // Check if the mouse is hovering over each shape and draw accordingly
  if (!isMouseOverShape(408, 831, 612, 196)) {
    fill(124, 56, 86);
    rect(408, 831, 612, 196);
  }

  if (!isMouseOverShape(1099, 598, 266, 430)) {
    fill(198, 96, 25);
    triangle(1099, 598, 1365, 1028, 834, 1028);
  }

  if (!isMouseOverShape(1077, 634, 243, 394)) {
    fill(193, 31, 28);
    triangle(1077, 634, 1320, 1028, 834, 1028);
  }

  if (!isMouseOverShape(1058, 699, 191, 329)) {
    fill(59, 101, 80);
    triangle(1058, 699, 1249, 1028, 868, 1028);
  }

  if (!isMouseOverShape(1024, 758, 157, 270)) {
    noStroke();
    fill(203, 189, 173);
    triangle(1024, 758, 1181, 1028, 868, 1028);
  }

  if (!isMouseOverShape(1090, 808, 127, 220)) {
    noStroke();
    fill(31, 31, 35);
    triangle(1090, 808, 1217, 1028, 963, 1028);
  }

  if (!isMouseOverShape(1260, 737, 255, 290)) {
    fill(195, 21, 57);
    rect(1260, 737, 255, 290);
  }

  if (!isMouseOverShape(1260, 763, 255, 264)) {
    fill(197, 56, 31);
    rect(1260, 763, 255, 264);
  }

  if (!isMouseOverShape(1260, 797, 255, 230)) {
    fill(189, 45, 76);
    rect(1260, 797, 255, 230);
  }

  if (!isMouseOverShape(1260, 823, 255, 204)) {
    fill(197, 56, 31);
    rect(1260, 823, 255, 204);
  }

  if (!isMouseOverShape(408, 745, 316, 213)) {
    fill(31, 31, 35);
    rect(408, 745, 316, 213);
  }

  if (!isMouseOverShape(531, 587, 316, 159)) {
    fill(46, 76, 52);
    rect(531, 587, 316, 159);
  }

  if (!isMouseOverShape(723, 54, 38, 537)) {
    rect(723, 54, 38, 537);
  }

  if (!isMouseOverShape(543, 635, 29, 399)) {
    fill(198, 96, 25);
    rect(543, 635, 29, 399);
  }

  if (!isMouseOverShape(592, 635, 29, 399)) {
    fill(198, 96, 25);
    rect(592, 635, 29, 399);
  }

  if (!isMouseOverShape(641, 635, 29, 399)) {
    fill(198, 96, 25);
    rect(641, 635, 29, 399);
  }

  if (!isMouseOverShape(691, 635, 29, 399)) {
    fill(198, 96, 25);
    rect(691, 635, 29, 399);
  }

  if (!isMouseOverShape(740, 323, 29, 711)) {
    fill(198, 96, 25);
    rect(740, 323, 29, 711);
  }

  if (!isMouseOverShape(643, 165, 32, 26)) {
    fill(198, 96, 25);
    rect(643, 165, 32, 26);
  }

  if (!isMouseOverShape(610, 127, 23, 18)) {
    fill(198, 96, 25);
    rect(610, 127, 23, 18);
  }

  if (!isMouseOverShape(551, 168, 45, 34)) {
    fill(198, 96, 25);
    rect(551, 168, 45, 34);
  }

  if (!isMouseOverShape(514, 169, 37, 34)) {
    fill(46, 76, 52);
    rect(514, 169, 37, 34);
  }

  if (!isMouseOverShape(475, 118, 27, 24)) {
    fill(46, 76, 52);
    rect(475, 118, 27, 24);
  }

  if (!isMouseOverShape(407, 170, 52, 47)) {
    fill(46, 76, 52);
    rect(407, 170, 52, 47);
  }

  if (!isMouseOverShape(655, 54, 38, 537)) {
    rect(655, 54, 38, 537);
  }

  if (!isMouseOverShape(833, 54, 45, 129)) {
    fill(146, 48, 98);
    rect(833, 54, 45, 129);
  }

  if (!isMouseOverShape(810, 54, 38, 537)) {
    fill(46, 76, 52);
    rect(810, 54, 38, 537);
  }

  if (!isMouseOverShape(967, 279, 36, 87)) {
    fill(73, 32, 70);
    rect(967, 279, 36, 87);
  }

  if (!isMouseOverShape(1017, 50, 342, 221)) {
    fill(146, 48, 98);
    rect(1017, 50, 342, 221);
  }

  if (!isMouseOverShape(1093, 54, 29, 349)) {
    fill(193, 31, 28);
    rect(1093, 54, 29, 349);
  }

  if (!isMouseOverShape(1142, 54, 29, 349)) {
    fill(193, 31, 28);
    rect(1142, 54, 29, 349);
  }

  if (!isMouseOverShape(1192, 54, 29, 349)) {
    fill(193, 31, 28);
    rect(1192, 54, 29, 349);
  }

  if (!isMouseOverShape(1241, 54, 29, 349)) {
    fill(193, 31, 28);
    rect(1241, 54, 29, 349);
  }

  if (!isMouseOverShape(1290, 54, 29, 349)) {
    fill(193, 31, 28);
    rect(1290, 54, 29, 349);
  }

  if (!isMouseOverShape(1215, 454, 52, 47)) {
    fill(46, 76, 52);
    rect(1215, 454, 52, 47);
  }

  if (!isMouseOverShape(1188, 501, 27, 24)) {
    fill(46, 76, 52);
    rect(1188, 501, 27, 24);
  }

  if (!isMouseOverShape(1150, 467, 37, 34)) {
    fill(46, 76, 52);
    rect(1150, 467, 37, 34);
  }

  if (!isMouseOverShape(1105, 467, 45, 34)) {
    fill(198, 96, 25);
    rect(1105, 467, 45, 34);
  }

  if (!isMouseOverShape(1081, 501, 23, 18)) {
    fill(198, 96, 25);
    rect(1081, 501, 23, 18);
  }

  if (!isMouseOverShape(1049, 475, 32, 26)) {
    fill(198, 96, 25);
    rect(1049, 475, 32, 26);
  }

   // Display the logo image
  image(img, width / 2, height / 2);

  // Calculate the time remaining until the countdown date
  let currentTime = new Date();
  let timeRemaining = countdownDate - currentTime;

  // Convert time remaining to hours, minutes, and seconds
  let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown timer
  fill(255);
  textSize(24);
  text(`Countdown: ${hours}h ${minutes}m ${seconds}s`, 20, 30);

  // Function to check if the mouse is over a shape
  function isMouseOverShape(x, y, width, height) {
    return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
  }
}