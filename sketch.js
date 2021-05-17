const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    getBackgroundImg();

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);
    else
        background("yellow");

    Engine.update(engine);
    
    // write code to display time in correct format here
    textSize(35);
    fill("teal");
    noStroke();
    text("Time: "+hour, 30, 30);
    if(hour < 12 && hour > 00)
    {
        text("AM", 200, 30);
    }
    else if(hour > 12 && hour < 24)
    {
        text("PM", 200, 30);
    }
    else if(hour === 12)
    {
        text("Noon", 200, 30);
    }
    else
    {
        text("Midnight", 200, 30);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    //console.log(dateTime);
    // write code slice the datetime
    hour = dateTime.slice(11, 13);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if(hour > 04 && hour <= 06)
    {
        bg = "sunrise1.png";
    }
    else if(hour > 06 && hour <= 08)
    {
        bg = "sunrise2.png";
    }
    else if(hour > 08 && hour <= 10)
    {
        bg = "sunrise3.png";
    }
    else if(hour > 10 && hour <= 12)
    {
        bg = "sunrise4.png";
    }
    else if(hour > 12 && hour <= 14)
    {
        bg = "sunrise5.png";
    }
    else if(hour > 14 && hour <= 16)
    {
        bg = "sunrise6.png";
    }
    else if(hour > 16 && hour <= 17)
    {
        bg = "sunset7.png";
    }
    else if(hour > 17 && hour <= 18)
    {
        bg = "sunset8.png";
    }
    else if(hour > 18 && hour <= 19)
    {
        bg = "sunset9.png";
    }
    else if(hour > 19 && hour == 20)
    {
        bg = "sunset10.png";
    }
    else if (hour > 20 && hour <= 00)
    {
        bg = "sunset11.png";
    }
    else
    {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}