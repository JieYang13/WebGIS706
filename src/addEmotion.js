
//输入对应时间的geojson文件得到对应时间的地图效果
//返回得到的时间图层
function addEmotion(features){
    var geojsonMarkerOptions1 = {
        radius: 8,
        fillColor: "#8cb33e",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions2 = {
        radius: 10,
        fillColor: "#739b99",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions3 = {
        radius: 10,
        fillColor: "#ccff99",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions4 = {
        radius: 10,
        fillColor: "#a0d878",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions5 = {
        radius: 10,
        fillColor: "#99f158",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions6 = {
        radius: 10,
        fillColor: "#028255",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions7 = {
        radius: 10,
        fillColor: "#6ff9c1",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions8 = {
        radius: 10,
        fillColor: "#02b340",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions9 = {
        radius: 10,
        fillColor: "#8ba39e",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions10 = {
        radius: 10,
        fillColor: "#b3ffbc",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions11 = {
        radius: 10,
        fillColor: "#e6fffd",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var timelayer = L.geoJSON(features, {
        pointToLayer: function (feature, latlng) {
           // return L.circleMarker(latlng, geojsonMarkerOptions);
            switch (feature.properties.value) {
                case '-1': return L.circleMarker(latlng, geojsonMarkerOptions1);
                case '-0.8':   return L.circleMarker(latlng, geojsonMarkerOptions2);
                case '-0.7': return L.circleMarker(latlng, geojsonMarkerOptions3);
                case '-0.6':   return L.circleMarker(latlng, geojsonMarkerOptions4);
                case '-0.5': return L.circleMarker(latlng, geojsonMarkerOptions5);
                case '-0.4':   return L.circleMarker(latlng, geojsonMarkerOptions6);
                case '-0.2': return L.circleMarker(latlng, geojsonMarkerOptions7);
                case '0.2':   return L.circleMarker(latlng, geojsonMarkerOptions8);
                case '0.4': return L.circleMarker(latlng, geojsonMarkerOptions9);
                case '0.6':   return L.circleMarker(latlng, geojsonMarkerOptions10);
                case '1': return L.circleMarker(latlng, geojsonMarkerOptions11);
            }
        }
    }).addTo(map);
    return timelayer;
}