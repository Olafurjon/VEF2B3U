
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
  async: false,
  'success': function(response) {
    console.log(response);


for (var i = 0; i < response['results'].length -1; i++) {
	stod = new logstod(response['results'][i]['name'],response['results'][i]['company'],response['results'][i]['bensin95'],response['results'][i]['diesel'],response['results'][i]['geo']['lat'],response['results'][i]['geo']['lon']);
	console.log(response['results'][i]['company']);
	arraystodvar.push(stod);
	var stod = { nafn : response['results'][i]['name'], lat : response['results'][i]['geo']['lat'], lon : response['results'][i]['geo']['lon']};
	stodvar.push(stod);}
console.log("ajax");
  }

});



var me 
      function initMap() {
        console.log("mapinit");
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 64.133333, lng: -21.933333},
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
          var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Þú!'});

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
        for (var i = 0; i < arraystodvar.length; i++) {
        var x = arraystodvar[i]['geox']
        var y = arraystodvar[i]['geoy']
        var image = 'img/fillingstation.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: x, lng: y },
          map: map,
          icon: image
        });
        };

  

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');


      };