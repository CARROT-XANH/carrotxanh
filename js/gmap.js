var mapLocation = new google.maps.LatLng(20.983727869292995, 105.79383278464087); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 20, //change zoom here
        center: mapLocation,
        scrollwheel: false
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    
    
    // Thay đổi thông tin địa chỉ ở đây
var contentString = '<div class="map-info">' 
+ '<div class="map-title">' 
+ '<h3><img alt="" src="img/brand.png"></h3></div>' 
+ '<p class="map-address"><i class="fa fa-map-marker"></i><span class="text"><strong>18 Ngõ 55 Đường Trần Phú, Trần Phú, Hà Đông, Hà Nội, Việt Nam</strong></span><br><i class="fa fa-phone"></i><span class="text">0356040477</span><br><span class="map-email"><i class="fa fa-envelope"></i><span class="text">carrotxanh.designer@gmail.com</span></span></p>'
+ '<p><a href="https://www.google.com/maps/place/18+Ng%C3%B5+55+%C4%90%C6%B0%E1%BB%9Dng+Tr%E1%BA%A7n+Ph%C3%BA,+Tr%E1%BA%A7n+Ph%C3%BA,+H%C3%A0+%C4%90%C3%B4ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam" target="_blank">Mở trên Google Maps</a></p></div>';


    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'CARROT_XANH', //change title here
    
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

if ($('#map-canvas').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

