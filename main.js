Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera")
Webcam.attach("#camera")

function takePicture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='taken_picture' src='" + data_uri + "'>"
    })
}

function speak(){
    var synth=window.speechSynthesis
    speak1="The First Prediction Is "+ Prediction1
    speak2="The Second Prediction Is "+ Prediction2
var utterThis=new SpeechSynthesisUtterance(speak1+speak2)
synth.speak(utterThis)
}

console.log("ml5 version:", ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uckAiG6X5/model.json", modelLoaded)

function modelLoaded(){
    console.log("The Model Is Loaded")
}

function check(){
    img=document.getElementById("taken_picture")
    classifier.classify(img, gotResult)
}

function gotResult(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        Prediction1=result[0].label
        Prediction2=result[1].label
        document.getElementById("result_gesture_name").innerHTML=Prediction1
        document.getElementById("result_gesture_name2").innerHTML=Prediction2
        speak()
        if (Prediction1=="Thumbs Up"){
            document.getElementById("update_gesture").innerHTML="&#128077;"
        }

        if (Prediction1=="Thumbs Down"){
            document.getElementById("update_gesture").innerHTML="&#128078;"
        }

        if (Prediction1=="Victory"){
            document.getElementById("update_gesture").innerHTML="&#9996;"
        }

        if (Prediction1=="Amazing"){
            document.getElementById("update_gesture").innerHTML="&#128076;"
        }

        if (Prediction2=="Thumbs Up"){
            document.getElementById("update_gesture2").innerHTML="&#128077;"
        }

        if (Prediction2=="Thumbs Dowm"){
            document.getElementById("update_gesture2").innerHTML="&#128078;"
        }

        if (Prediction2=="Victory"){
            document.getElementById("update_gesture2").innerHTML="&#9996;"
        }

        if (Prediction2=="Amazing"){
            document.getElementById("update_gesture2").innerHTML="&#128076;"
        }
    }
}