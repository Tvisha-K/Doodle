function setup() {

    canvas = createCanvas(300, 300);

    canvas.center();

    background("yellow");


}

function draw() {

    canvas.mouseReleased(classify_canvas);

    if (mouseIsPressed) {

        strokeWeight(5);

        stroke("red");

        line(pmouseX, pmouseY, mouseX, mouseY);


    }

}




function clear_canvas() {

    background("yellow");

}

function preload() {

    model = ml5.imageClassifier("DoodleNet");

}


function classify_canvas() {

    model.classify(canvas, got_result);

}

function got_result(e, r) {

    if (e) {

        console.error(e);

    } else {

        console.log(r);

        doodle_name = r[0].label;

        doodle_confidence = Math.floor(r[0].confidence*100);

        document.getElementById("label").innerHTML = "Label : " + doodle_name;

        document.getElementById("confidence").innerHTML = "Confidence : " + doodle_confidence + "%";

        speak_audio = new SpeechSynthesisUtterance(doodle_name);

        window.speechSynthesis.speak(speak_audio);

    }

}

