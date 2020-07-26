<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3voYuJPggNKICI88qdzDmOLuXqaSuKps&callback=initMap">
    </script>
    <script src="assets/js/map.js"></script> <script>
    function initMap() {
  // The location of Uluru
  var snowdon = {lat: 53.0680, lng: -4.0720};
  var nevis = {lat: 56.7690, lng: -5.0347};
  var pike = {lat: 54.4525, lng: -3.2069};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: snowdon});
  // The marker, positioned at Uluru
  

  var marker1 = new google.maps.Marker({position: snowdon, map: map, animation: google.maps.Animation.DROP});
  var marker2 = new google.maps.Marker({position: nevis, map: map, animation: google.maps.Animation.DROP});
  var marker3 = new google.maps.Marker({position: pike, map: map, animation: google.maps.Animation.DROP});

    }
    
</script>