var scrap = document.getElementById('text'); 
var docTitle = document.title;
var display = document.getElementById('data');




// Sets the title of the document to the image tags alt values. 
var numLinks;
var i;
var compiledTitle = "";

numLinks = document.getElementsByTagName("img");

for (i = 0; i < numLinks.length; i++) {
    var tempLinkText = document.getElementById('text').childNodes[1].childNodes[0].alt;
	compiledTitle = compiledTitle + tempLinkText + ", ";
}

document.title = compiledTitle;




var images = document.getElementsByTagName("img");
var i; 

for (i = 0; i < images.length; i++) {
    images[i].style.width = images[i].alt.length * 10 + "px";
    display.innerHTML = images.length;
}

var pText = document.getElementById("text").innerHTML;
var pTextArray = pText.split(" ");
var keyWords = ["clouds", "car"];
var count = " "; 

for (var i = 0; i < pTextArray.length; i++) {
	var temp = pTextArray[i]; 
	for (var j = 0; j < keyWords.length; j++) {
		if (temp = keyWords[j]) {
			count = count + temp;   
		}
	}
}

display.innerHTML = count;








// document.title = compiledTitle; 

// var linkText = document.getElementById('this').childNodes[1].text;
// var linkTextLength = linkText.length;
// display.innerHTML = linkText + " " + linkTextLength;
// display.style.width = "400px";

// var imageTag = document.getElementById('this').childNodes[1].childNodes[0];
// // imageTag.style.opacity = "0";
// imageTag.style.width = linkTextLength*10 + "px";
// // imageTag.style.height = document.getElementById('this').style.fontSize; 

// display.innerHTML = document.getElementById('this').style.fontSize + "px"; 

// docTitle.text = "pleasegod";

// display.innerHTML = "tree";