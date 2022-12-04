// var thePath = document.querySelectorAll("g");
// console.log(thePath);

var classes = [
	".Hair",
	".Eye",
	".Nose",
	".Mouth",
	".EarsLeft",
	".EarsRight",
	".rightLeg",
	".leftLeg",
	".Neck",
	".Face",
	".Clothes",
	".Hand",
	".Teddy",
	".brow",
];

for (let i = 0; i < classes.length; i++) {
	var classArr = document.querySelectorAll(classes[i]);
	// console.log(classArr)
	for (let j = 0; j < classArr.length; j++) {
		classArr[j].addEventListener("click", Display);
	}
}

function Display() {

	var word;
	switch (event.target.getAttribute("class")) {
		case "Hair":
			word = "Hair";
			document.getElementById("hairSound").play();
			break;
		case "Eye":
			word = "Eye";
			document.getElementById("eyeSound").play();
			break;
		case "Nose":
			word = "Nose";
			document.getElementById("noseSound").play();
			break;
		case "Mouth":
			word = "Mouth";
			document.getElementById("mouthSound").play();
			break;
		case "EarsLeft":
			word = "Left Ear";
			document.getElementById("leftEarSound").play();
			break;
		case "EarsRight":
			word = "Right Ear";
			document.getElementById("rightEarSound").play();
			break;
		case "rightLeg":
			word = "Right Leg";
			document.getElementById("rightLegSound").play();
			break;
		case "leftLeg":
			word = "Left Leg";
			document.getElementById("leftLegSound").play();
			break;
		case "Neck":
			word = "Neck";
			document.getElementById("NeckSound").play();
			break;
		case "Face":
			word = "Face";
			document.getElementById("FaceSound").play();
			break;
		case "Clothes":
			word = "Clothes";
			document.getElementById("ClothesSound").play();
			break;
		case "Hand":
			word = "Hand";
			document.getElementById("HandSound").play();
			break;
		case "Teddy":
			word = "Teddy Bear";
			document.getElementById("TeddySound").play();
			break;
		case "brow":
			word = "Eye Brow";
			document.getElementById("browSound").play();
			break;
	}
	console.log()
	show(word)
}

var wordDiv = document.getElementById("Word");
function show(input) {
	wordDiv.innerHTML = input;
	FadeIn(wordDiv)
}

function FadeIn(ele) {
	var i = 0;
	var stop = setInterval(
		function (ele) {
			ele.style = `opacity : ${i}`;
			if (i <= 1) {
				i += 0.1;
			} else {
				clearInterval(stop);
			}
		},
		70,
		ele
	);
}

setTimeout(function () {
	document.getElementById("nav").style.display = "block"
	document.getElementById("Secload").style.display = "none"
	document.getElementById("secWeb").style.display = "block"

}, 1300)