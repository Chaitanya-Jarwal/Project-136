input_text = "";
status = "";

function setup() {
    canvas = createCanvas(480,350);
    canvas.position(480, 250);
    video = createCapture(VIDEO);
    video.size(480,350);
    video.hide();
}

function start() {
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_text=document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}
function draw () {
    image(video,0,0,300,290);
}