function showMenu() {
    const navigationMenu = document.getElementsByClassName('menu__navigation__items');
    if (navigationMenu[0].classList.contains('show--menu')) {
        navigationMenu[0].classList.remove('show--menu')
    } else {
        navigationMenu[0].classList.add('show--menu')
    }
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-23.538978, -46.402362),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}