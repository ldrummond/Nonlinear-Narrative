var docHead = document.head
var fonts = "<link href=\"https://fonts.googleapis.com/css?family=Scheherazade\" rel=\"stylesheet\">"
var fa = "<script defer src=\"https://use.fontawesome.com/releases/v5.0.6/js/all.js\"></script>"
docHead.innerHTML = docHead.innerHTML + '\n' + fonts + '\n' + fa 



var images = document.getElementsByTagName("img");
var i; 

// Gets the innerHmtl of the P at the center of the page. Splits it by whitespace, then compares it to keywords. 
var pText = document.getElementById("text").innerHTML;
var pTextArray = pText.split(" ");
var keyWords = ["clouds", "mud", "plane", "colors", "home", "train", "sea"];
var count = ""; 
var pTextEdited = ""; 

for (var i = 0; i < pTextArray.length; i++) {
	var temp = pTextArray[i];
	for (var j = 0; j < keyWords.length; j++) {
		if (pTextArray[i] == keyWords[j]) {
			var tag = pTextArray[i];
			var imgWidth = tag.length * 26 + "px"
			var ranInt = Math.round(Math.random()*9) + 1
			// temp = "<a href=\"" + tag + ".html\"><img src=\"images/" + tag + ranInt + ".jpg\" alt=\"" + tag + "\" style=\"width:" + imgWidth + ";\"></a>";
			temp = "<img src=\"images/" + tag + ranInt + ".jpg\" alt=\"" + tag + "\" style=\"width:" + imgWidth + ";\">";
		} else if (pTextArray[i].substring(0, pTextArray[i].length - 1) == keyWords[j]) {
			var tag = pTextArray[i].substring(0, pTextArray[i].length - 1);
			var imgWidth = tag.length * 26 + "px"
			var ranInt = Math.round(Math.random()*9) + 1
			temp = "<img src=\"images/" + tag + ranInt + ".jpg\" alt=\"" + tag + "\" style=\"width:" + imgWidth + ";\">";
		}
	}
	pTextEdited += temp + " "; 
}
var fileBody = document.body
fileBody.innerHTML = fileBody.innerHTML + '\n' + "<a href=\"source.html\"><h4 id=\"source\">source</h4></a>"

document.getElementById("text").innerHTML = pTextEdited;
document.getElementById("text").style.opacity = "1";
// document.getElementById("text").style.fontSize =  + "px";


// Sets the title of the document to the image tags alt values. 
// var numLinks;
// var i;
// var compiledTitle = "";

// numLinks = document.getElementsByTagName("img");

// for (i = 0; i < numLinks.length; i++) {
//     var tempLinkText = document.getElementById('text').childNodes[1].childNodes[0].alt;
// 	compiledTitle = compiledTitle + tempLinkText + ", ";
// }

// document.title = compiledTitle;