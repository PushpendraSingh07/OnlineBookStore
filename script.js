
document.addEventListener("DOMContentLoaded", () => {
    const mapElement = document.getElementById('map');

    function displayMap(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const map = new google.maps.Map(mapElement, {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
        });

        new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: 'Your Location',
        });

        mapElement.addEventListener('click', () => {
            window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
        });
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                mapElement.innerHTML = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                mapElement.innerHTML = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                mapElement.innerHTML = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                mapElement.innerHTML = "An unknown error occurred.";
                break;
        }
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayMap, showError);
    } else {
        mapElement.innerHTML = "Geolocation is not supported by this browser.";
    }
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navmenu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
