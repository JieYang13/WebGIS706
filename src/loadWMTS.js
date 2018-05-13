var map;
function loadWMTS(){
    var place={ "type": "FeatureCollection",
        "features": [
            { "type": "Feature",
                "id":"01",
                "geometry": {"type": "Point", "coordinates": [113.014717, 25.770509]},
                "properties": {"name": "郴州"}
            },
            { "type": "Feature",
                "id":"02",
                "geometry": {"type": "Point", "coordinates": [108.311462, 29.311549]},
                "properties": {"name": "黔州"}
            },
            { "type": "Feature",
                "id":"03",
                "geometry": {"type": "Point", "coordinates": [115.814504, 32.890479]},
                "properties": {"name": "颖州"}
            },
            { "type": "Feature",
                "id":"04",
                "geometry": {"type": "Point", "coordinates": [126.534967, 45.803775]},
                "properties": {"name": "依兰县"}
            },
            { "type": "Feature",
                "id":"05",
                "geometry": {"type": "Point", "coordinates": [120.1551656, 30.27417023]},
                "properties": {"name": "杭州"}
            },
            { "type": "Feature",
                "id":"06",
                "geometry": {"type": "Point", "coordinates": [120.088045, 30.89305236]},
                "properties": {"name": "湖州"}
            }
        ]
    }

    var layer = L.tileLayer('http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    // var map = L.map('allmap',{
    //     minZoom: 4,
    //     maxZoom: 13
    // }).setView([48.505, 3.09], 13);


   //L.control.scale({'position':'bottomleft','metric':true,'imperial':false}).addTo(map);
    var layerbs= "ad1111";
    // The WMTS URL
    var url = "http://gis.sinica.edu.tw/ccts/wmts";

    var bs = new L.TileLayer.WMTS( url ,
        {
            layer: layerbs,
            style: "normal",
           // tilematrixSet: "GoogleMapsCompatible",
            format: "image/png"
        }
    );

    var layerns= "ad1208";
    var url = "http://gis.sinica.edu.tw/ccts/wmts";
    var ns = new L.TileLayer.WMTS( url ,
        {
            layer: layerns,
            style: "normal",
            //tilematrixSet: "GoogleMapsCompatible",
            format: "image/png"
        }
    );
    map = L.map('map').setView([34, 109], 5);
    L.control.scale({'position':'bottomleft','metric':true,'imperial':false}).addTo(map);

    map.addLayer(layer);
    map.addLayer(bs);


    var baseLayers = {
        "北宋" : bs,
        "南宋":ns
    };

    L.geoJson(place).addTo(map);
   // L.control.layers(baseLayers, {}).addTo(map);

    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
}