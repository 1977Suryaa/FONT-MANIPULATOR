nose_X=0
nose_y=0
left_wrist=0
right_wrist=0
var min=0
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
        nose_X=result[0].pose.nose.x
        nose_y=result[0].pose.nose.y
        left_wrist=result[0].pose.leftWrist.x
        right_wrist=result[0].pose.rightWrist.x
        min=floor(left_wrist-right_wrist)

        
    }
}
function draw(){
    background("pink")
    fill("red")
    stroke("black")
    textSize(min)
    text('Hello My Friend',nose_X,nose_y)
    fill("green")
    document.getElementById("empty").innerHTML="use your wrist to increase and decrease square size= "+min+"px"
    
}
