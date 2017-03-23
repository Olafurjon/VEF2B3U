
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
        var x = arraystodvar[1]['geox']
        var y = arraystodvar[1]['geoy']
        var image = 'img/fillingstation.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: x, lng: y },
          map: map,
          icon: image
        });
  

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');


      }
      