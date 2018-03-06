

https://api.twitter.com/1.1/statuses/user_timeline.json


access token = 970748733183942656-4BqjJdlbLO8GeW88MwoPVAufsig1VRI;
access secret = 	ml9vvCaIeYVbxqZ4gfKsjXfGOpn3KwvAz4TRDFFeaCwQT;
owner id = 	970748733183942656;


function loginAjax(event){

	// Make a URL-encoded string for passing POST data:
	var dataString = "username=" + encodeURIComponent(username.value) + "&password=" + encodeURIComponent(password.value) + "&submit=login";
	
	var xmlHttp = new XMLHttpRequest(); 
	xmlHttp.open("POST", "login_ajax.php", true); 
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // It's easy to forget this line for POST requests
	xmlHttp.addEventListener("load", function(event){
		var jsonData = JSON.parse(event.target.responseText);
		if(jsonData.success){
            username.value += ": SUCCESS!";
			window.location = "calendar.html";
		} else {
            username.placeholder = jsonData.message;
            username.value = "";
            password.value = "";
        }
	}, false); // Bind the callback to the load event
	xmlHttp.send(dataString); // Send the data
}

function createAjax(event){
	var username = document.getElementById("username"); 
	var password = document.getElementById("password");

	// Make a URL-encoded string for passing POST data:
	var dataString = "username=" + encodeURIComponent(username.value) + "&password=" + encodeURIComponent(password.value) + "&submit=create";
	
	var xmlHttp = new XMLHttpRequest(); 
	xmlHttp.open("POST", "login_ajax.php", true); 
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.addEventListener("load", function(event){
        cout(jsonData);
		var jsonData = JSON.parse(event.target.responseText);
		if(jsonData.success){  
			username.placeholder = jsonData.message;
            username.value = "";
            password.value = "";
		} else {
            username.placeholder = jsonData.message;
            username.value = "";
            password.value = "";
        }
	}, false); // Bind the callback to the load event
	xmlHttp.send(dataString); // Send the data
}


let loginButton = document.getElementById('login');
let createButton = document.getElementById('newUser');

loginButton.addEventListener('click', loginAjax, false); // Bind the AJAX call to button click
createButton.addEventListener('click', createAjax, false); // Bind the AJAX call to button click

cout("finished");