function setup(){
    canvas=createCanvas(400,400)
    canvas.position(560,90)
    webcam=createCapture(VIDEO)
    webcam.size(400,400)
    posenet=ml5.poseNet(webcam,modelLoaded)
    posenet.on("pose",gotResult)
}
function modelLoaded(){
    console.log("it is working")
}
function gotResult(result){
    if(result.length>0){
        console.log(result)
    }
}