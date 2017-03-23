function logstod(name,company,bensin,diesel,geox,geoy)
{
	this.name = name;
	this.company = company;
	this.bensin = bensin;
	this.diesel = diesel;
	this.geox = geox;
	this.geoy = geoy;
}

var arraystodvar = [];
var stodvar = [];

$.ajax({
  'url': 'http://apis.is/petrol',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    console.log(response);


for (var i = 0; i < response['results'].length -1; i++) {
	stod = new logstod(response['results'][i]['name'],response['results'][i]['company'],response['results'][i]['bensin95'],response['results'][i]['diesel'],response['results'][i]['geo']['lat'],response['results'][i]['geo']['lon']);
	console.log(response['results'][i]['company']);
	arraystodvar.push(stod);
	stod = { nafn : response['results'][i]['name'], lat : response['results'][i]['geo']['lat'], lon : response['results'][i]['lon']};
	stodvar.push(stod);

}


var random = 1 + Math.floor(Math.random() * (arraystodvar.length -1));
var gex = arraystodvar[random]['geox']
var gey = arraystodvar[random]['geoy']
/*https://maps.googleapis.com/maps/api/js?key=AIzaSyBPPFWjh1XtI3ZEYYAORMnJIIpPFWbkGRM&callback=initMap*/
/*https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBPPFWjh1XtI3ZEYYAORMnJIIpPFWbkGRM&location="+gex+",+"+gey+"&heading=210&pitch=10&fov=35*/
var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBPPFWjh1XtI3ZEYYAORMnJIIpPFWbkGRM&callback=initMap";
$('<div />', {
	name: 'div',
	id: 'frame',
	src: url,
}).appendTo('body');

  }

});

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
         var infoWindow = new google.maps.InfoWindow({map: map});

         // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Staðsetning fundin');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        });
		
		for (var i = 0; i < stod.length -1; i++) {
		
		var marker = new google.maps.Marker({
        position: uluru,
        map: map
        });
			
		};

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');


      }
      