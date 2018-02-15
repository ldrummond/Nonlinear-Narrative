// Sets up a console in the page view with printing, for debugging purposes. 
// Adds a function cout(""); 
// var pageBody = document.getElementsByTagName('body')[0];
// pageBody.innerHTML = 
// 	"<div id=\"console\"></div>" + 
// 		"<style type=\"text/css\">" +
// 			"#console {" +
// 				"position: fixed;" +
// 				"top: 0;" +
// 				"right: 0;" +
// 				"width: 400px;" +
// 				"height: 200px;" +
// 				"color: black;" +
// 				"border: 1px solid black;" +
// 				"padding: 20px;" +
// 				"background-color: white;" +
// 				"font-family: sans-serif;" +
// 				"font-size: 13px;" +
// 				"z-index: 1;" + 
// 				"overflow: auto" + 
// 			"}" +
// 		"</style>" + pageBody.innerHTML;

// var console = document.getElementById("console");
// function cout(message) {
// 	console.innerHTML += message + "<br>";
// }
//////////////////////////////////////////////////////////////////////////////////////////////////

//Set up the includes for the pages. 
// var docHead = document.head;
// // var fonts = "<link href=\"https://fonts.googleapis.com/css?family=Raleway:400,700,900|family=Scheherazade\" rel=\"stylesheet\">";
// docHead.head = docHead + '\n' + fonts;


// Gets the innerHmtl of the P at the center of the page. Splits it by whitespace, then compares it to keywords. 
var pText = document.getElementById("text").innerHTML;
var pTextArray = pText.split(" ");
var keyWords = ["clouds", "mud", "plane", "colors", "home", "train", "sea", "sand", "station"];
var keywordMatches = [0,0,0,0,0,0,0,0,0];
var pTextEdited = " "; 
var fileBody = document.getElementsByTagName('body')[0];
var i; 


var textLinks = document.getElementById("text").getElementsByTagName("a");
var j;
var textState = "image";


function viewText(){
	var docText = document.getElementById('text')
	docText.style.color = "black";
	docText.style.lineHeight = "30px";
	var curImages = document.getElementsByTagName('img');
	for (var i = 0; i < curImages.length; i++) {
		curImages[i].style.opacity = "0";
		curImages[i].style.pointerEvents = "none";
		// curImages[i].style.display = "none";
	}
	document.getElementById('textDrop1').style.opacity = 0; 
	document.getElementById('textDrop2').style.opacity = 0;
}

function viewImage(){
	var docText = document.getElementById('text')
	docText.style.color = "white";
	var curImages = document.getElementsByTagName('img');
	for (var i = 0; i < curImages.length; i++) {
		curImages[i].style.position = "unset";
		curImages[i].style.display = "";
		curImages[i].style.opacity = "1";
		curImages[i].style.pointerEvents = "all";
	}
	// docText.style.lineHeight = "";
	document.getElementById('textDrop1').style.opacity = 0; 
	document.getElementById('textDrop2').style.opacity = 0; 
}

var first = true; 

function viewStructure(){
		var curImages = document.getElementsByTagName('img');
		if (first == true) {
			for (var i = 0; i < curImages.length; i++) {
				var selectedImage = curImages[i]
				selectedImage.style.position = "absolute";
				for (var j = 0; j < keyWords.length; j++) {
					if(selectedImage.alt == keyWords[j]) {
						if (first == true) {
							keywordMatches[j] ++; 
						}
						selectedImage.style.top = 200 + j * 50 + "px";
						selectedImage.style.left = 300+ (keywordMatches[j] * 50) + "px";
						// selectedImage.style.opacity = "0";
					}
				}
			}
		} else {
			for (var i = 0; i < curImages.length; i++) {
				var selectedImage = curImages[i]
				selectedImage.style.position = "absolute";
			}
		}
		document.getElementById('textDrop1').style.opacity = 1; 
		document.getElementById('textDrop2').style.opacity = 1; 
		first = false; 
}

// function offZoom(){
// 	$('img').remove(okzoom)
// }


for (var j = 0; j < textLinks.length; j++) {
	var temp = textLinks[j];
	var ranInt = Math.round(Math.random()*9) + 1;
	var newImg = document.createElement("img");
	var imgWidth = temp.innerHTML.length * 5 + "px";
	var imgSrc = "images/" + temp.innerHTML.split(" ")[1] + ranInt + ".jpg";
	newImg.alt = temp.innerHTML.split(" ")[1];
	newImg.src = imgSrc; 
	newImg.style.backgroundImage = "url(\"" + imgSrc + "\")";
	newImg.style.width = imgWidth;
	temp.innerHTML = "";
	temp.style.transition = "opacity" + ranInt + "s ease-in-out";
	temp.style.opacity = "1";
	temp.appendChild(newImg);
}

window.onload = function(){
	document.getElementById("text").style.opacity = "1";
	// $('img').okzoom({
	//     width: 200,
	//     height: 150,
	//     round: false,
	//     scaleWidth: 300,
	//     background: "#fff",
	//     /*backgroundRepeat: "repeat",*/
	//     shadow: "0 0 0px #000",
	//     border: "1px solid black"
	// });
}



// cout("finished");


