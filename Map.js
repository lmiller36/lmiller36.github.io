function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}

function createPositionArr(lat, lng) {
	return { "lat": parseFloat(lat), "lng": parseFloat(lng) };
}

function initMap() {
	var PE = { lat: 41.8908348, lng: -87.6272821 };
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: PE,
		styles: [{
			"featureType": "poi",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		}]
	});


	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById("legend"));
	document.getElementById("legend").style.display = "block";

	init();


}

function init() {
	initializeAirports()
		.then(initializeRoutes());
		// .then(updateDestinationRestrictions(0));

}