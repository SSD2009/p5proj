function setup(){
    canvas=createCanvas(550,450);
    video = createCapture(VIDEO);
    video.size(200,200);
    video.position(575,350);
    canvas.position(400,200);
    tintcolor="";
}

function draw(){
    stroke("green");
    strokeWeight(10);
    rect(5,5,540,440);
}

function takephoto(){
    save("filterphoto.jpeg");
}

function applyfilter(){
    tintcolor=document.getElementById("color").value;
}