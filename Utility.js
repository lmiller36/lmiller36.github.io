function createPositionArr(lat, lng) {
	return { "lat": parseFloat(lat), "lng": parseFloat(lng) };
}

function getData(url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {

			callback(request.responseText);

		}
	}


}

function getJSON(myURL, callback) {
	let url = myURL;
	fetch(url)
		.then(res => res.json())
		.then((out) => {
			callback(out);
		})
		.catch(err => console.error(err));
}

function randomColor() {
	var R_Value = Math.trunc(Math.random() * 256);
	var G_Value = Math.trunc(Math.random() * 256);
	var B_Value = Math.trunc(Math.random() * 256);

	return '#' + R_Value.toString(16) + G_Value.toString(16) + B_Value.toString(16);
}
