
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


var destarray = [];
var me 
      function initMap() {
        console.log("mapinit");

        var map = new google.maps.Map(document.getElementById('map'), {zoom: 8});
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({'address': 'Iceland'}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
          } else {
            window.alert('Geocode was not successful for the following reason: ' +
                status);
          }
        });

         var infoWindow = new google.maps.InfoWindow({map: map});

         // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            me = pos;
            var bounds = new google.maps.LatLngBounds;
        var markersArray = [];
        
        var i = 0;

       while (i < 60){
        	var destination = {name: arraystodvar[i+10]['name'], lat: arraystodvar[i+10]['geox'], lng: arraystodvar[i+10]['geoy']};
        	destarray.push(destination);

       

        var destinationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=A|FF0000|000000';
        var originIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=B|FFFF00|000000';

        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
          origins: [me],
          destinations: [destination],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          console.log(response.rows[0].elements[0].distance.value);
          if(response.rows[0].elements[0].distance.value > 8000 )
          {
          i--;
          var check = "nope";
          destarray.pop()
          }
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } 
          if(check == "nope")
          {}
          else {
            var originList = response.originAddresses;
            console.log(response.rows.elements);
            var destinationList = response.destinationAddresses;
            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML += '';
            deleteMarkers(markersArray);

            var showGeocodedAddressOnMap = function(asDestination) {
              var icon = asDestination ? destinationIcon : originIcon;
              return function(results, status) {
                if (status === 'OK') {
                  map.fitBounds(bounds.extend(results[0].geometry.location));
    
                } else {
                  alert('Geocode was not successful due to: ' + status);
                }
              };
            };

                   console.log(destarray);
        for (var i = 0; i < destarray.length; i++) {
         console.log(destarray[i])
        var x = destarray[i]['lat']
        var y = destarray[i]['lng']
        var titill = destarray[i]['name']
        var image = 'img/fillingstation.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: x, lng: y },
          map: map,
          icon: image,
          title: titill
        });
        };

            for (var i = 0; i < originList.length; i++) {
              var results = response.rows[i].elements;
              geocoder.geocode({'address': originList[i]},
                  showGeocodedAddressOnMap(false));

              for (var j = 0; j < results.length; j++) {
                geocoder.geocode({'address': destinationList[j]},
                    showGeocodedAddressOnMap(false));
                outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
                    ': ' + results[j].distance.text + ' in ' +
                    results[j].duration.text + '<br>';
              }
            }
          }
        });
        i++;
    }
      

      function deleteMarkers(markersArray) {
        for (var i = 0; i < markersArray.length; i++) {
          markersArray[i].setMap(null);
        }
        markersArray = []; 

      }
          var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Þú!'
      });

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
 
        
  }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');


      };