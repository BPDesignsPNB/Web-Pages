/*jshint esversion: 6 */

//GOOGLE MAP MARKER
function initMap() {
  let uluru = {lat: -38.9534771, lng: -68.05490069999996};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
