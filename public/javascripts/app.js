$(function() {
	setInterval(function() {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;

			$('.main').html(lat + ', ' + lon);
		})
	}, 500);
});