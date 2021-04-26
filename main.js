canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 120;
car_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "Race.png";

function add() {
Background_imgTag = new Image();
Background_imgTag.onload = uploadbackground;
Background_imgTag.src = background_image;

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(Background_imgTag , 0 , 0 , canvas.width , canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car_width , car_height)
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag , car2_x , car2_y , car_width , car_height)
}
window.addEventListener("keydown" , my_keydown)
function my_keydown(e) {
keyPressed = e.keyCode;
console.log (keypressed);
if(keyPressed == "38") {
    car_1up();
    console.log("up arrow key")
}

if(keyPressed == "40") {
    car_1down();
    console.log("down arrow key")
}

if(keyPressed == "37") {
    car_1left();
    console.log("left arrow key")
}

if(keyPressed == "39") {
    car_1right();
    console.log("right arrow key")
}

if(keyPressed == "87") {
    car_2up();
    console.log("w key")
}

if(keyPressed == "65") {
    car_2left();
    console.log("a key")
}

if(keyPressed == "83") {
    car_2down();
    console.log("s key")
}

if(keyPressed == "68") {
    car_2right();
    console.log("d key")
}
}