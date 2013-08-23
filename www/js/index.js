var map, layer;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("deviceready received");
        map = new OpenLayers.Map('map');
        layer = new OpenLayers.Layer.OSM( "Simple OSM Map");
        map.addLayer(layer);
        map.setCenter(
            new OpenLayers.LonLat(4.072693, 46.034427).transform(
                new OpenLayers.Projection("EPSG:4326"),
                map.getProjectionObject()
            ), 13
        );
    },
};
