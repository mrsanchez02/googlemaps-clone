mapboxgl.accessToken = 'pk.eyJ1IjoibXJzYW5jaGV6MDIiLCJhIjoiY2txenFzZ2ZxMWt0bTJ2bzhtbDQ4aTlkNSJ9.bddffmVD_boW5kXO-cm_ZQ';

const successLocation = (position) => {
    setupMap([position.coords.longitude, position.coords.latitude])
}

const errorLocation = () => {
    setupMap([-69.893333, 18.476389,])
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

const setupMap = (center) => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    
    // Mostrar Controles de navegacion (zoomIn, ZoomOut y Compass)
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right')

    // Buscador.
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        limit:3,
        placeholder:'🔍 Search'
    })
    map.addControl(geocoder,'bottom-left');
    
    // Mostrar controles de direccion (Para trazar ruta)
     map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    )
}

