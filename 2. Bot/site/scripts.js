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

let locationsArray = [["Yosemite National Park","37.865101","-119.538329"], 
["indio","33.720577","-116.215562"], 
["glenwood springs, colorado","39.550538","-107.324776"], 
["Albuquerque NM","35.085334","-106.605553"], 
["New Mexico","34.51994","-105.87009"], 
["marina vallarta puerto vallarta mexico","20.665014","-105.251418"], 
["Fort Collins, Co","40.58526","-105.084423"], 
["The Denver Bicycle Cafe, Denver CO","39.743107","-104.970548"], 
["Japan","34.400913","-103.33358"], 
["sand lakes provincial park, manitoba canada","57.97488","-98.819302"], 
["Methodist Dallas Medical Center, TX","32.761431","-96.824778"], 
["Paris","33.660939","-95.555513"], 
["rolla missouri","37.948544","-91.77153"], 
["washington st. park missouri","37.852659","-90.495512"], 
["starbucks creve cour st. louis mo","38.670841","-90.435135"], 
["Comfort Inn, Festus MO","38.213991","-90.408277"], 
["Lulu asian kitchen, 9626 Olive Blvd, Olivette, MO 63132","38.673296","-90.386211"], 
["Elsah Illinois","38.956159","-90.359836"], 
["downtown clayton, st. louis mo","38.648571","-90.336013"], 
["Shrewsbury, St. Louis MO","38.58695","-90.330134"], 
["clayton and mccausland st. louis","38.632642","-90.304525"], 
["heavy riff brewing company, st. louis MO","38.628932","-90.293392"], 
["graham st. and west park avenue","38.627066","-90.29157"], 
["forest park, St. Louis","38.636527","-90.287627"], 
["the boathouse forest park","38.639869","-90.284679"], 
["brock auto parts and recycling, st. louis MO","38.682438","-90.283575"], 
["2100 Sublette Ave, St. Louis","38.616368","-90.280401"], 
["soho lofts, st. louis","38.655831","-90.275471"], 
["sherman park, st. louis","38.655297","-90.269047"], 
["urban chestnut grove brewery and bierhall","38.626651","-90.261156"], 
["missouri botanical garden, st. louis","38.612767","-90.25938"], 
["imo's pizza in st. louis","38.638684","-90.25843"], 
["Tower grove park, St. Louis","38.606567","-90.258393"], 
["Botanical Heights","38.621247","-90.252616"], 
["the scottish arms st. louis","38.63674","-90.246718"], 
["ikea st. louis","38.633762","-90.245026"], 
["goodwill outlet st. louis","38.631701","-90.23982"], 
["slu medical center stadium st. louis","38.623093","-90.231942"], 
["Anheiser Busch, St. Louis","38.598696","-90.210028"], 
["1338 Boeger Ave, Westchester, IL 60154","41.859834","-87.899726"],
["Dominican university, chicago","41.902413","-87.822059"], 
["goodwill chicago","41.882814","-87.657013"], 
["wrigley field, chicago","41.948438","-87.655333"], 
["Chicago","41.878114","-87.629798"], 
["museum of art chicago","41.897215","-87.621474"], 
["Louisville, Kentucky","38.252665","-85.758456"], 
["chattanooga TN","35.04563","-85.30968"], 
["portland, indiana","40.43449","-84.977745"], 
["devou park, cincinnati","39.080004","-84.540483"], 
["oaks grove elementary school","35.713599","-78.783187"], 
["New Zealand","38.918958","-77.064227"], 
["US","39.918427","-75.136655"], 
["La Paz, Bolivia","-16.512683","-68.121301"], 
["Puerto Rico","18.220833","-66.590149"], 
["Reykjavik, Iceland","64.143717","-21.937693"], 
["Lyon France","45.762915","4.837973"], 
["Bukavu Democratic Republic of the Congo","-2.50087","28.855392"], 
["Kuala Lumpur, Malaysia","3.154922","101.7225"], 
["54 Devenish St, East Victoria Park WA 6101, Australia","-31.991335","115.898055"]];


let foundTweets = [
"Found Item #98: shampoo in Lyon France",
"Found Item #97: photo album in forest park, St. Louis",
"Found Item #96: checkbook in clayton and mccausland st. louis",
"Found Item #95: tire swing in heavy riff brewing company, st. louis MO",
"Found Item #94: pillow in Elsah Illinois",
"Found Item #93: diploma in soho lofts, st. louis",
"Found Item #92: fake flowers in glenwood springs, colorado",
"Found Item #91: camera in imo's pizza in st. louis",
"Found Item #90: backpack in washington st. park missouri",
"Found Item #89: watch in Paris",
"Found Item #88: bird in oaks grove elementary school",
"Found Item #87: fridge in 1338 Boeger Ave Westchester, IL 60154",
"Found Item #86: helmet in wrigley field, chicago",
"Found Item #85: food in New Zealand",
"Found Item #84: grandmother in forest park, St. Louis",
"Found Item #83: horse in Fort Collins, Co",
"Found Item #82: kite in Tower grove park, St. Louis",
"Found Item #81: rubber duck in Fort Collins, Co",
"Found Item #80: book in Paris",
"Found Item #79: shoes in marina vallarta puerto vallarta mexico",
"Found Item #78: fake flowers in goodwill chicago",
"Found Item #77: CD in the boathouse forest park",
"Found Item #76: pillow in Yosemite National Park",
"Found Item #75: bananas in Japan",
"Found Item #74: kite in The Denver Bicycle Cafe, Denver CO",
"Found Item #73: deodorant in Paris",
"Found Item #72: bracelet in starbucks creve cour st. louis mo",
"Found Item #71: food in marina vallarta puerto vallarta mexico",
"Found Item #70: ice cube tray in devou park, cincinnati",
"Found Item #69: socks in US",
"Found Item #68: a frisbee in indio",
"Found Item #67: parrot in Methodist Dallas Medical Center, TX",
"Found Item #66: air conditioner in 2100 Sublette Ave, St. Louis",
"Found Item #65: diploma in Reykjavik, Iceland",
"Found Item #64: drawer in Chicago",
"Found Item #63: snow pants in graham st. and west park avenue",
"Found Item #62: laundry bag in missouri botanical garden, st. louis",
"Found Item #61: bread in portland, indiana",
"Found Item #60: sailboat in brock auto parts and recycling, st. louis MO",
"Found Item #59: cell phone in chattanooga TN",
"Found Item #58: bracelet in forest park, St. Louis",
"Found Item #57: watch in Japan",
"Found Item #56: food in Bukavu Democratic Republic of the Congo",
"Found Item #55: paint brush in Lyon France",
"Found Item #54: air conditioner in portland, indiana",
"Found Item #53: tax forms in Paris",
"Found Item #52: sandal in Dominican university, chicago",
"Found Item #51: ipod in Paris",
"Found Item #50: cell phone in museum of art chicago",
"Found Item #49: a hoop earring in New Zealand",
"Found Item #48: ice cube tray in Anheiser Busch, St. Louis",
"Found Item #47: tax forms in Bukavu Democratic Republic of the Congo",
"Found Item #46: helmet in Albuquerque NM",
"Found Item #45: keys in ikea st. louis",
"Found Item #44: air conditioner in imo's pizza in st. louis",
"Found Item #43: sketch pad in US",
"Found Item #42: deodorant in La Paz, Bolivia",
"Found Item #41: toothbrush in 54 Devenish St, East Victoria Park WA 6101, Australia",
"Found Item #40: cell phone in glenwood springs, colorado",
"Found Item #39: tax forms in Puerto Rico",
"Found Item #38: rubber duck in 1338 Boeger Ave Westchester, IL 60154",
"Found Item #37: laundry bag in the boathouse forest park",
"Found Item #36: sketch pad in indio",
"Found Item #35: towel in devou park, cincinnati",
"Found Item #34: thread in New Zealand",
"Found Item #33: pants in 2100 Sublette Ave, St. Louis",
"Found Item #32: backpack in wrigley field, chicago",
"Found Item #31: grandmother in Japan",
"Found Item #30: television in Puerto Rico",
"Found Item #29: shawl in marina vallarta puerto vallarta mexico",
"Found Item #28: bracelet in the scottish arms st. louis",
"Found Item #27: baloon in rolla missouri",
"Found Item #26: wallet in downtown clayton, st. louis mo",
"Found Item #25: picture frame in Comfort Inn, Festus MO",
"Found Item #24: air conditioner in slu medical center stadium st. louis",
"Found Item #23: CD in urban chestnut grove brewery and bierhall",
"Found Item #22: horse in portland, indiana",
"Found Item #21: fake flowers in heavy riff brewing company, st. louis MO",
"Found Item #20: sponge in indio",
"Found Item #19: sponge in oaks grove elementary school",
"Found Item #18: shoes in glenwood springs, colorado",
"Found Item #17: sailboat in 54 Devenish St, East Victoria Park WA 6101, Australia",
"Found Item #16: a hoop earring in the boathouse forest park",
"Found Item #15: bird in Paris",
"Found Item #14: pool stick in Anheiser Busch, St. Louis",
"Found Item #13: laundry bag in Methodist Dallas Medical Center, TX",
"Found Item #12: grandmother in museum of art chicago",
"Found Item #11: deodorant in New Mexico",
"Found Item #10: television in the boathouse forest park",
"Found Item #9: bread in imo's pizza in st. louis",
"Found Item #8: food in 1338 Boeger Ave Westchester, IL 60154",
"Found Item #7: toothbrush in New Zealand",
"Found Item #6: snow pants in glenwood springs, colorado",
"Found Item #5: bird in wrigley field, chicago",
"Found Item #4: tax forms in New Mexico",
"Found Item #3: pillow in slu medical center stadium st. louis",
"Found Item #2: picture frame in Methodist Dallas Medical Center, TX",
"Found Item #1: cat in Elsah Illinois"
]


lostTweets = [
"Lost Item #99: pool stick in Reykjavik, Iceland",
"Lost Item #98: deodorant in Chicago",
"Lost Item #97: fake flowers in Paris",
"Lost Item #96: tax forms in glenwood springs, colorado",
"Lost Item #95: thread in portland, indiana",
"Lost Item #94: checkbook in devou park, cincinnati",
"Lost Item #93: sailboat in Puerto Rico",
"Lost Item #92: credit card in Kuala Lumpur, Malaysia",
"Lost Item #91: snow pants in marina vallarta puerto vallarta mexico",
"Lost Item #90: bracelet in Shrewsbury, St. Louis MO",
"Lost Item #89: parents in the boathouse forest park",
"Lost Item #88: CD in Anheiser Busch, St. Louis",
"Lost Item #87: parents in goodwill chicago",
"Lost Item #86: checkbook in Dominican university, chicago",
"Lost Item #85: diploma in forest park, St. Louis",
"Lost Item #84: CD in Bukavu Democratic Republic of the Congo",
"Lost Item #83: shoes in rolla missouri",
"Lost Item #82: sketch pad in oaks grove elementary school",
"Lost Item #81: cell phone in US",
"Lost Item #80: CD in Albuquerque NM",
"Lost Item #79: ipod in Lulu asian kitchen, 9626 Olive Blvd, Olivette, MO 63132",
"Lost Item #78: tax forms in forest park, St. Louis",
"Lost Item #77: towel in indio",
"Lost Item #76: kite in Chicago",
"Lost Item #75: clay pot in Fort Collins, Co",
"Lost Item #74: bananas in La Paz, Bolivia",
"Lost Item #73: boom box in Comfort Inn, Festus MO",
"Lost Item #72: checkbook in 54 Devenish St, East Victoria Park WA 6101, Australia",
"Lost Item #71: fridge in Chicago",
"Lost Item #70: bracelet in 1338 Boeger Ave Westchester, IL 60154",
"Lost Item #69: radio in Tower grove park, St. Louis",
"Lost Item #68: shoes in brock auto parts and recycling, st. louis MO",
"Lost Item #67: cell phone in Reykjavik, Iceland",
"Lost Item #66: shirt in Dominican university, chicago",
"Lost Item #65: sponge in the scottish arms st. louis",
"Lost Item #64: laundry bag in downtown clayton, st. louis mo",
"Lost Item #63: ipod in wrigley field, chicago",
"Lost Item #62: clay pot in rolla missouri",
"Lost Item #61: credit card in 54 Devenish St, East Victoria Park WA 6101, Australia",
"Lost Item #60: tax forms in Louisville, Kentucky",
"Lost Item #59: coffee roaster in clayton and mccausland st. louis",
"Lost Item #58: boom box in wrigley field, chicago",
"Lost Item #57: shampoo in graham st. and west park avenue",
"Lost Item #56: CD in indio",
"Lost Item #55: parrot in starbucks creve cour st. louis mo",
"Lost Item #54: snow pants in 54 Devenish St, East Victoria Park WA 6101, Australia",
"Lost Item #53: CD in Puerto Rico",
"Lost Item #52: bracelet in Dominican university, chicago",
"Lost Item #51: parents in ikea st. louis",
"Lost Item #50: towel in Elsah Illinois",
"Lost Item #49: bird in forest park, St. Louis",
"Lost Item #48: grandmother in Botanical Heights",
"Lost Item #47: toothbrush in rolla missouri",
"Lost Item #46: heelys in The Denver Bicycle Cafe, Denver CO",
"Lost Item #45: watch in 2100 Sublette Ave, St. Louis",
"Lost Item #44: cell phone in Comfort Inn, Festus MO",
"Lost Item #43: pants in New Zealand",
"Lost Item #42: tax forms in Bukavu Democratic Republic of the Congo",
"Lost Item #41: pillow in 54 Devenish St, East Victoria Park WA 6101, Australia",
"Lost Item #40: bread in forest park, St. Louis",
"Lost Item #39: shoes in washington st. park missouri",
"Lost Item #38: child in Albuquerque NM",
"Lost Item #37: heelys in clayton and mccausland st. louis",
"Lost Item #36: reciept in 2100 Sublette Ave, St. Louis",
"Lost Item #35: tire swing in soho lofts, st. louis",
"Lost Item #34: tire swing in Comfort Inn, Festus MO",
"Lost Item #33: bracelet in forest park, St. Louis",
"Lost Item #32: wallet in Bukavu Democratic Republic of the Congo",
"Lost Item #31: sketch pad in rolla missouri",
"Lost Item #30: parents in US",
"Lost Item #29: parents in graham st. and west park avenue",
"Lost Item #28: cell phone in clayton and mccausland st. louis",
"Lost Item #27: ice cube tray in US",
"Lost Item #26: bird in Dominican university, chicago",
"Lost Item #25: watch in Bukavu Democratic Republic of the Congo",
"Lost Item #24: sketch pad in Fort Collins, Co",
"Lost Item #23: tire swing in imo's pizza in st. louis",
"Lost Item #22: food in missouri botanical garden, st. louis",
"Lost Item #21: air conditioner in 2100 Sublette Ave, St. Louis",
"Lost Item #20: tire swing in Methodist Dallas Medical Center, TX",
"Lost Item #19: grandmother in portland, indiana",
"Lost Item #18: boom box in downtown clayton, st. louis mo",
"Lost Item #17: paint brush in goodwill outlet st. louis",
"Lost Item #16: child in oaks grove elementary school",
"Lost Item #15: parrot in the scottish arms st. louis",
"Lost Item #14: newspaper in US",
"Lost Item #13: baloon in chattanooga TN",
"Lost Item #12: fake flowers in brock auto parts and recycling, st. louis MO",
"Lost Item #11: baloon in forest park, St. Louis",
"Lost Item #10: bracelet in indio",
"Lost Item #9: drawer in brock auto parts and recycling, st. louis MO",
"Lost Item #8: sponge in Louisville, Kentucky",
"Lost Item #7: bird in US",
"Lost Item #6: snow pants in slu medical center stadium st. louis",
"Lost Item #5: kite in Albuquerque NM",
"Lost Item #4: laundry bag in New Zealand",
"Lost Item #3: sandal in Lulu asian kitchen, 9626 Olive Blvd, Olivette, MO 63132",
"Lost Item #2: a hoop earring in glenwood springs, colorado"
]

var silver = [
		          {
		            elementType: 'geometry',
		            stylers: [{color: '#777'}]
		          },
		          {
		            elementType: 'labels.icon',
		            stylers: [{visibility: 'off'}]
		          },
		          {
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#fff'}]
		          },
		          {
		            elementType: 'labels.text.stroke',
		            stylers: [{color: '#f5f5f5'}]
		          },
		          {
		            featureType: 'administrative.land_parcel',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#bdbdbd'}]
		          },
		          {
		            featureType: 'poi',
		            elementType: 'geometry',
		            stylers: [{color: '#000'}]
		          },
		          {
		            featureType: 'poi',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#757575'}]
		          },
		          {
		            featureType: 'poi.park',
		            elementType: 'geometry',
		            stylers: [{color: '#000'}]
		          },
		          {
		            featureType: 'poi.park',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#000'}]
		          },
		          {
		            featureType: 'road',
		            elementType: 'geometry',
		            stylers: [{color: '#ffffff'}]
		          },
		          {
		            featureType: 'road.arterial',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#757575'}]
		          },
		          {
		            featureType: 'road.highway',
		            elementType: 'geometry',
		            stylers: [{color: '#dadada'}]
		          },
		          {
		            featureType: 'road.highway',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#616161'}]
		          },
		          {
		            featureType: 'road.local',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#9e9e9e'}]
		          },
		          {
		            featureType: 'transit.line',
		            elementType: 'geometry',
		            stylers: [{color: '#e5e5e5'}]
		          },
		          {
		            featureType: 'transit.station',
		            elementType: 'geometry',
		            stylers: [{color: '#eeeeee'}]
		          },
		          {
		            featureType: 'water',
		            elementType: 'geometry',
		            stylers: [{color: '#c9c9c9'}]
		          },
		          {
		            featureType: 'water',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#9e9e9e'}]
		          }
		       ]

		       // var silver = [
		       //    {
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      elementType: 'labels.icon',
		       //      stylers: [{visibility: 'off'}]
		       //    },
		       //    {
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#fff'}]
		       //    },
		       //    {
		       //      elementType: 'labels.text.stroke',
		       //      stylers: [{color: '#fff'}]
		       //    },
		       //    {
		       //      featureType: 'administrative.land_parcel',
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      featureType: 'poi',
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      featureType: 'poi',
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      featureType: 'poi.park',
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      featureType: 'poi.park',
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      featureType: 'road',
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      featureType: 'road.arterial',
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#fff'}]
		       //    },
		       //    {
		       //      featureType: 'road.highway',
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#fff'}]
		       //    },
		       //    {
		       //      featureType: 'road.highway',
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#fff'}]
		       //    },
		       //    {
		       //      featureType: 'road.local',
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#fff'}]
		       //    },
		       //    {
		       //      featureType: 'transit.line',
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#fff'}]
		       //    },
		       //    {
		       //      featureType: 'transit.station',
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#000'}]
		       //    },
		       //    {
		       //      featureType: 'water',
		       //      elementType: 'geometry',
		       //      stylers: [{color: '#c9c9c9'}]
		       //    },
		       //    {
		       //      featureType: 'water',
		       //      elementType: 'labels.text.fill',
		       //      stylers: [{color: '#9e9e9e'}]
		       //    }
		       // ]


function hideTitle() {
	title = document.getElementById('titleBlock');
	title.style.display = "none";
	document.getElementById('showTitleButton').style.opacity = '1';
	document.getElementById('showTitleButton').style.pointerEvents = 'all';
	document.getElementById("titles").style.opacity = "1";
	document.getElementById("titles").style.pointerEvents = "all";
	document.getElementById("details").style.opacity = "1";
	document.getElementById("details").style.pointerEvents = "all";
	newMatch();
}

function showTitle() {
	title = document.getElementById('titleBlock');
	title.style.display = "";
	document.getElementById("titles").style.opacity = "0";
	document.getElementById("titles").style.pointerEvents = "none";
	document.getElementById("details").style.opacity = "0";
	document.getElementById("details").style.pointerEvents = "none";
}

var matches = []; 

function getMatches() {
	var match = false; 
	var re = /Item #([0-9]+): ([\w\s\,\.]+) in ([\w\s\,\.]+)/

	for(var lt in lostTweets) {
		for(var ft in foundTweets) {
			if (lostTweets[lt].match(re)[2] === foundTweets[ft].match(re)[2] && (foundTweets[ft].match(re)[2] !== "")) {
				var matchObj = lostTweets[lt].match(re)[2];
				var lostTweet = lostTweets[lt]; 
				var lostNum = lostTweets[lt].match(re)[1];
				var lostLoc = lostTweets[lt].match(re)[3];
				var foundTweet = foundTweets[ft];
				var foundNum = foundTweets[ft].match(re)[1];
				var foundLoc = foundTweets[ft].match(re)[3];
				var lostPoint; 
				var foundPoint; 

				for(var loc in locationsArray) {
					if(lostLoc === locationsArray[loc][0]) {
						lostPoint = {lat: parseFloat(locationsArray[loc][1]), lng: parseFloat(locationsArray[loc][2])};
						// console.log(locationsArray[loc][1] + ", " + locationsArray[loc][2]);
					}
					if(foundLoc === locationsArray[loc][0]) {
						foundPoint = {lat: parseFloat(locationsArray[loc][1]), lng: parseFloat(locationsArray[loc][2])};
						// console.log(locationsArray[loc][1] + ", " + locationsArray[loc][2]);
					}
				}

				var matchArray = [matchObj, lostTweet, lostNum, lostLoc, lostPoint, foundTweet, foundNum, foundLoc, foundPoint];
				matches.push(matchArray);

				// console.log("matched : " + matchObj + " from - " + lostLoc + " " + lostPoint + "  to  " + foundLoc + " " + foundPoint);
				// pointA = lostPoint;
				// pointB = foundPoint;
			}
		}
	}
}



function initMap(matchArray) {
		// Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: pointA,
          zoom: 6
        });

        var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map,
          suppressMarkers: true
        });

        var aMark = new google.maps.Marker({
	          position: pointA,
	          map: map,
	          title: 'Lost',
	          label: {
	          	color: "white", text: "?", fontWeight: "bold"
	          }
	    });

        var bMark = new google.maps.Marker({
          position: pointB,
          map: map,
          title: 'Found',
          label: {
          	color: "white", text: "X", fontWeight: "bold"
          }
        });

        console.log(matchArray);


        if(matchArray != undefined) {
        		 recItem.textContent = matchArray[0];
		var lostInfo = 
			'<div id="windowContent">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Lost Item #' + matchArray[2] + '</h1>'+
			'<h2 id="secondHeading" class="secondHeading">' + matchArray[0] +'</h2>' +
			'<div id="bodyContent">'+
			'<p>This object was tweeted Lost in ' + matchArray[3] + '</p>'+
			'</div>'+
			'</div>';

		var foundInfo = 
			'<div id="windowContent">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Found Item #' + matchArray[6] +'</h1>'+
			'<h2 id="secondHeading" class="secondHeading">' + matchArray[0] +'</h2>' +
			'<div id="bodyContent">'+
			'<p>This object was tweeted Found in ' + matchArray[7] + '</p>'+
			'</div>'+
			'</div>';
		}

		var lostWindow = new google.maps.InfoWindow({
		  content: lostInfo
		});

		var foundWindow = new google.maps.InfoWindow({
		  content: foundInfo
		});

		aMark.addListener('click', function() {
		  lostWindow.open(map, aMark);
		});

		bMark.addListener('click', function() {
		  foundWindow.open(map, bMark);
		});

        var bounds = new google.maps.LatLngBounds();
		bounds.extend(aMark.getPosition());
		bounds.extend(bMark.getPosition());
		map.fitBounds(bounds);

        // Set destination, origin and travel mode.
        var request = {
          destination: pointB,
          origin: pointA,
          travelMode: 'DRIVING',
          provideRouteAlternatives: true
        };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
            
          }
          else {
          	var altPath = new google.maps.Polyline({
	         path: [pointA, pointB],
	         geodesic: true,
	         strokeColor: '#73aeef',
	         strokeOpacity: 1.0,
	         strokeWeight: 5
	        });

	        altPath.setMap(map);
	        }
        });

        map.controls = [];
        map.setOptions({styles: silver, disableDefaultUI: true});

}


function setMatches() {
	var matchNum = Math.round(Math.random() * matches.length);
	pointA = matches[matchNum][4];
	pointB = matches[matchNum][8];
	if (pointA === pointB) {
		setMatches;
	} else {
		firstMatch = matches[matchNum];
		// initMap(matches[matchNum]);
	}
}

function newMatch() {
	var matchNum = Math.round(Math.random() * matches.length);
	pointA = matches[matchNum][4];
	pointB = matches[matchNum][8];
	if (pointA === pointB) {
		setMatches;
	} else {
		initMap(matches[matchNum]);
	}
}

messageExit = document.getElementById('hideTitleButton');
messageExit.addEventListener('click', hideTitle, false);

messageExit = document.getElementById('showTitleButton');
messageExit.addEventListener('click', showTitle, false);

document.getElementById("simulate").addEventListener("click", newMatch, false); 
var recItem = document.getElementById("recoveredItem");


// MAIN FUNCTION
var firstMatch;

getMatches();
setMatches();
// initMap(firstMatch)
// document.addEventListener("DOMContentLoaded", newMatch, false); 
console.log(firstMatch);

// var mapMatches = setInterval(setMatches, 6000);

// var aMark = new google.maps.Marker({
// 	          position: pointA,
// 	          map: map,
// 	          title: 'Lost',
// 	          label: {
// 	          	color: "white", text: "?", fontWeight: "bold"
// 	          }
// 	    });

//         var bMark = new google.maps.Marker({
//           position: pointB,
//           map: map,
//           title: 'Found',
//           label: {
//           	color: "white", text: "X", fontWeight: "bold"
//           }
//         });

//         console.log(matchArray);

//         // if(matchArray != undefined) {
// 		var lostInfo = 
// 			'<div id="windowContent">'+
// 			'<div id="siteNotice">'+
// 			'</div>'+
// 			'<h1 id="firstHeading" class="firstHeading">Lost Item #' + matchArray[2] + '</h1>'+
// 			'<h2 id="secondHeading" class="secondHeading">' + matchArray[0] +'</h2>' +
// 			'<div id="bodyContent">'+
// 			'<p>This object was tweeted Lost in ' + matchArray[3] + '</p>'+
// 			'</div>'+
// 			'</div>';

// 		var foundInfo = 
// 			'<div id="windowContent">'+
// 			'<div id="siteNotice">'+
// 			'</div>'+
// 			'<h1 id="firstHeading" class="firstHeading">Found Item #' + matchArray[6] +'</h1>'+
// 			'<h2 id="secondHeading" class="secondHeading">' + matchArray[0] +'</h2>' +
// 			'<div id="bodyContent">'+
// 			'<p>This object was tweeted Found in ' + matchArray[7] + '</p>'+
// 			'</div>'+
// 			'</div>';
// 		}

