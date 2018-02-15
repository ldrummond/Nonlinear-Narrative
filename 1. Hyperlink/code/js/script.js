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
// // var fonts = "<link href=\"https://fonts.googleapis.com/css?family=Raleway:400,700,900|family=Scheherazade\" rel=\"stylesheet\">";
// docHead.head = docHead + '\n' + fonts;


// Gets the innerHmtl of the P at the center of the page. Splits it by whitespace, then compares it to keywords. 
var pText = document.getElementById("text").innerHTML;
var pTextArray = pText.split(" ");
var keyWords = ["clouds", "mud", "plane", "colors", "home", "train", "sea", "sand", "station"];
var pTextEdited = " "; 
var fileBody = document.getElementsByTagName('body')[0];
var i; 

// var hoverImage = document.createElement("div");
// hoverImage.id = "hoverImage"; 


var textLinks = document.getElementById("text").getElementsByTagName("a");
var imgSrc
var j;

// function setBackground(){
	// var testImage = document.getElementById("test");
	// testImage.style.backgroundColor = "red"; 
	// testImage.backgroundImage = newImg.src; 
	// hoverImage.style.backgroundImage = "url(\"./images/" + "home1.jpg" + "\")";
	// testImage.style.backgroundImage = "url(\"./images/" + imgSrc + "\")";
// }

// var newImg = document.createElement("img")

for (var j = 0; j < textLinks.length; j++) {
	var temp = textLinks[j];
	var ranInt = Math.round(Math.random()*9) + 1;
	var newImg = document.createElement("img");
	var imgWidth = temp.innerHTML.length * 5 + "px";
	temp.style.marginLeft = imgWidth;
	temp.style.marginRight = imgWidth;
	var imgSrc = "images/" + temp.innerHTML.split(" ")[1] + ranInt + ".jpg";
	newImg.src = imgSrc; 
	newImg.style.backgroundImage = "url(\"" + imgSrc + "\")";
	// newImg.style.width = imgWidth;
	// newImg.addEventListener('hover', function(){});
	// newImg.addEventListener("mouseover", setBackground);
	temp.innerHTML = "";
	temp.appendChild(newImg);
}



//Adds an image responsive div to page. 
// document.body.appendChild(hoverImage);

// cout("finished");


var fileBody = document.body.innerHTML;
var source = "<a href=\"source.html\"><h4 id=\"source\"><i class=\"far fa-file\"></i></h4></a>";
var refresh = "<a href=\"source.html\"><h4 id=\"source\"><i class=\"fas fa-sync-alt\"></i></h4></a>";
document.body.innerHTML = fileBody + '\n' + source;


window.onload = function(){
	document.getElementById("text").style.opacity = "1";
}
