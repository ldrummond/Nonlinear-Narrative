let itemsArray = ["a frisbee",
"a hoop earring",
"air conditioner",
"backpack",
"a baloon",
"bananas",
"a bird",
"book",
"boom box",
"bracelet",
"bread",
"camera",
"cat",
"CD",
"cell phone",
"checkbook",
"child",
"a clay pot",
"a coffee roaster",
"credit card",
"deodorant",
"diploma",
"dog [tag says lana]",
"drawer",
"fake flowers",
"food",
"fridge",
"gnome",
"grandmother",
"heelys",
"helmet",
"a horse",
"ice cube tray",
"ipod",
"keys",
"kite",
"laundry bag",
"newspaper",
"paint brush",
"pants",
"parents",
"parrot",
"pencil",
"photo album",
"picture frame",
"pillow",
"pool stick",
"radio",
"reciept",
"rubber duck",
"sailboat",
"sandal",
"shampoo",
"shawl",
"shirt",
"shoes",
"sketch pad",
"snow pants",
"socks",
"sponge",
"tax forms",
"television",
"thread",
"tire swing",
"toothbrush",
"towel",
"wallet",
"watch" ];



function hideTitle() {
	title = document.getElementById('titleBlock');
	title.style.display = "none";
	document.getElementById('showTitleButton').style.opacity = '1';
	document.getElementById('showTitleButton').style.pointerEvents = 'all';
	document.getElementById("titles").style.opacity = "1";
	document.getElementById("titles").style.pointerEvents = "all";
	document.getElementById("chart").style.opacity = "1";
	document.getElementById("chart").style.pointerEvents = "all";
}

function showTitle() {
	title = document.getElementById('titleBlock');
	title.style.display = "";
	document.getElementById("titles").style.opacity = "0";
	document.getElementById("titles").style.pointerEvents = "none";
	document.getElementById("chart").style.opacity = "0";
	document.getElementById("chart").style.pointerEvents = "none";
}




messageExit = document.getElementById('hideTitleButton');
messageExit.addEventListener('click', hideTitle, false);

messageExit = document.getElementById('showTitleButton');
messageExit.addEventListener('click', showTitle, false);


var re = /Item #[0-9]+: ([\w\s\,\.]+)/;

function getItem() {
	var ranInt1 = Math.round(Math.random()*44);
	var ranInt2 = Math.round(Math.random()*44);
	// lostItem = lostArray[ranInt1].match(re);
	lostItem = lostArray[ranInt1];
	foundItem = foundArray[ranInt2];
	// document.getElementById('foundNumber').textContent = ranInt1;
	// document.getElementById('lostNumber').textContent = ranInt2;
	document.getElementById('foundItem').textContent = randomItemsArray[ranInt1];
	document.getElementById('lostItem').textContent = randomItemsArray[ranInt2];

	if(lostItem == foundItem) {
		document.getElementById('match').textContent = randomItemsArray[ranInt1];
		match = true; 
	}
	// for (var i = 0; i < itemsArray.length; i++) {
	// 	let itemRe = "/" + randomItemsArray[i] + "/";
	// 	if (lostItem.match(itemRe) && foundItem.match(itemRe)) {
	// 		document.getElementById('match').textContent = itemsArray[i];
	// 	} else {
	// 		// document.getElementById('match').textContent = "";
	// 	}
	// } 


}

let match = false; 

while (!match) {
	getItem();
}

document.addEventListener("DOMContentLoaded", getItem, false);
document.getElementById('simulate').addEventListener("click", getItem, false);
document.getElementById('simulate').addEventListener("click", initMap, false);

function containsItem(tweet) {
	for (var item in itemsArray) {
		let regex = "/" + item + "/";
		if tweet.match(regex) {
			return item; 
		}
	}
}




let pointA; 
let pointB; 


function initMap() {
// Create a map object and specify the DOM element for display.
	    // pointA = {lat: 41.85, lng: -87.65};
     //    pointB = {lat: 39.79, lng: -86.14};

     //    var map = new google.maps.Map(document.getElementById('map'), {
     //      center: pointA,
     //      zoom: 7
     //    });

     //    var directionsDisplay = new google.maps.DirectionsRenderer({
     //      map: map
     //    });

     //    // Set destination, origin and travel mode.
     //    var request = {
     //      destination: pointB,
     //      origin: pointA,
     //      travelMode: 'DRIVING'
     //    };

     //    // Pass the directions request to the directions service.
     //    var directionsService = new google.maps.DirectionsService();
     //    directionsService.route(request, function(response, status) {
     //      if (status == 'OK') {
     //        // Display the route on the map.
     //        directionsDisplay.setDirections(response);
     //      }
     //    });
}







