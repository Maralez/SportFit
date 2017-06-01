jQuery(document).ready(function($){
	//Местоположение: долгота, широта и коэффициент увеличения
	var latitude = 53.927745,
		longitude = 27.637757,
		map_zoom = 14;

	//Адрес до иконки с маркером
	var marker_url = 'img/icon-location1.png';

	//Стили для элементов на карте
	var style= [
    {"featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {"saturation": 36},
            {"color": "#000000"},
            {"lightness": 40}
        ]
    },

    {"featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {"visibility": "on"},
            {"color": "#000000"},
            {"lightness": 16}
        ]
    },
    
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#00000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];
		
	//Создание точки на карте
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style
    }

    //Инициализация карты
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	//Добавляем свой маркер местонахождения на карту (свою иконку)			
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(53.917354, 27.604637),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	var marker2 = new google.maps.Marker({
	  	position: new google.maps.LatLng(53.927524,27.681390),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	 var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">СПОРТКЛУБ SPORTFIT</h1>'+
          '<div id="bodyContent">'+
          '<p>ул. Сурганова 2, Минск</p>'+
          '<p><b>+375 29 566-53-99</b>'+
          '</p>'+
          '</div>'+
          '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
       content: contentString,
       maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker,);
    });


	 var contentString2 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">СПОРТКЛУБ SPORTFIT</h1>'+
          '<div id="bodyContent">'+
          '<p>ул. Купревича 1/5, Минск</p>'+
          '<p><b>+375 29 509-99-09</b>'+
          '</p>'+
          '</div>'+
          '</div>';

    // Создаем информационное окно
    var infowindow2 = new google.maps.InfoWindow({
       content: contentString2,
       maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2,);
    });

	//Добавляем свои иконки для кнопок увеличить/уменьшить на карту
	function CustomZoomControl(controlDiv, map) { 
	  	var controlUIzoomIn= document.getElementById('zoom-in'),
	  		controlUIzoomOut= document.getElementById('zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		//Делаем привязку для кнопок увеличить/уменьшить при клике
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//Помещаем кнопки увеличить/уменьшить на карту в левый верхний угол
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});


  