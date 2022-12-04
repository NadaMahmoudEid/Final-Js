////For sound Hair//////
var Hairs = document.querySelectorAll(".Hair");
for (var i = 0; i < Hairs.length; i++) {
	Hairs[i].addEventListener("click", function () {
		document.getElementById("hairSound").play();
		show("Hair");
		Document.innerHTML=event.target;
	});
}
////For sound Eye//////
var Eyes = document.querySelectorAll(".Eye");
console.log(Eyes);
for (var i = 0; i < Eyes.length; i++) {
	Eyes[i].addEventListener("click", function () {
		document.getElementById("eyeSound").play();
		show("Eye");
	});
}
////For sound Nose//////
var noses = document.getElementById("Nose");
noses.addEventListener("click", function () {
	document.getElementById("noseSound").play();
	show("Nose");
});
////For sound Mouth//////
var Mouths = document.querySelectorAll(".Mouth");
console.log(Mouths);
for (var i = 0; i < Mouths.length; i++) {
	Mouths[i].addEventListener("click", function () {
		document.getElementById("mouthSound").play();
		show("Mouth");
	});
}
/////LeftEars/////
var earsLeft = document.querySelectorAll(".EarsLeft");
for (var i = 0; i < earsLeft.length; i++) {
	earsLeft[i].addEventListener("click", function () {
		document.getElementById("leftEarSound").play();
		show("Left Ear");
	});
}
////////RightEars/////
var earsRight = document.querySelectorAll(".EarsRight");
for (var i = 0; i < earsRight.length; i++) {
	earsRight[i].addEventListener("click", function () {
		document.getElementById("rightEarSound").play();
		show("Right Ear");
	});
}
///////right leg//////////
var rightLeg = document.querySelectorAll(".rightLeg");
for (var i = 0; i < rightLeg.length; i++) {
	rightLeg[i].addEventListener("click", function () {
		document.getElementById("rightLegSound").play();
		show("Right Leg");
	});
}
/////////Left Leg//////
var leftLeg = document.querySelectorAll(".leftLeg");
for (var i = 0; i < leftLeg.length; i++) {
	leftLeg[i].addEventListener("click", function () {
		document.getElementById("leftLegSound").play();
		show("Left Leg");
	});
}
///////Neck////////
var Neck = document.querySelectorAll(".Neck");
for (var i = 0; i < Neck.length; i++) {
	Neck[i].addEventListener("click", function () {
		document.getElementById("NeckSound").play();
		show("Neck");
	});
}
///////////Face///////////
var Face = document.querySelectorAll(".Face");
for (var i = 0; i < Face.length; i++) {
	Face[i].addEventListener("click", function () {
		document.getElementById("FaceSound").play();
		show("Face");
	});
}
////////////Clothes//////////
var Clothes = document.querySelectorAll(".Clothes");
for (var i = 0; i < Clothes.length; i++) {
	Clothes[i].addEventListener("click", function () {
		document.getElementById("ClothesSound").play();
		show("Clothes");
	});
}
////////Hand//////
var Hand = document.querySelectorAll(".Hand");
for (var i = 0; i < Hand.length; i++) {
	Hand[i].addEventListener("click", function () {
		document.getElementById("HandSound").play();
		show("Hand");
	});
}
/////////Teddy/////////
var Teddy = document.querySelectorAll(".Teddy");
for (var i = 0; i < Teddy.length; i++) {
	Teddy[i].addEventListener("click", function () {
		document.getElementById("TeddySound").play();
		show("Teddy");
	});
}
///////////Eyw Brow/////////
var brow = document.querySelectorAll(".brow");
for (var i = 0; i < brow.length; i++) {
	brow[i].addEventListener("click", function () {
		document.getElementById("browSound").play();
		show("Eye Brow");
	});
}

var word = document.getElementById("Word");
function show(input) {
	word.innerHTML = input;
	// document.getElementById("Word").style.opacity = 0;
	
	FadeIn(word)
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
		50,
		ele
	);
}

