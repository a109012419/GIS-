var Pro = new ol.proj.Projection({
	code: 'EPSG:4326', //坐标系为4326
	extent: [-180, -90, 180, 90] //限制显示范围，去掉openlayers的地图自我重复显示
});
var map = new ol.Map({
	layers: [
		// new ol.layer.Tile({
		// 	source: new ol.source.OSM()
		// })
	],
	view: new ol.View({
		center: [500, -300],
		zoom: 1,
		projection: Pro,
	}),
	target: 'map'
});
//用于加载矢量清军军事行动路线
var vector1 = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: '牛排岭data/清军行进路线.json', // 地图来源
		format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
	}),
	style: function(feature) {
		var style = new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: 'black',
				width: 0.5 //边框设置
			}),
			fill: new ol.style.Fill({
				color: 'rgba(67, 205, 128, 0.4)' //图层设置
			})
		})
		return style;
	}
});
//用于加载矢量太平军军事行动路线
var vector2 = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: '牛排岭data/太平军行进路线.json', // 地图来源
		format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
	}),
	style: function(feature) {
		var style = new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: 'black',
				width: 0.5 //边框设置
			}),
			fill: new ol.style.Fill({
				color: 'rgba(205,85,85, 0.4)' //图层设置
			})
		})
		return style;
	}
});
//用于加载矢量地点
var vector3 = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: '牛排岭data/city.json', // 地图来源
		format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
	}),
	style: function(feature) {
		var style = new ol.style.Style({
			text: new ol.style.Text({ //文本设置
				font: '12px Calibri,sans-serif',
				fill: new ol.style.Fill({
					color: '#000'
				}),
				stroke: new ol.style.Stroke({
					color: '#fff',
					width: 3
				})
			})
		})
		style.getText().setText(feature.get('name'));
		return style;
	}
});
//用于加载矢量河流
var vector4 = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: '牛排岭data/lake.json', // 地图来源
		format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
	}),
	style: function(feature) {
		var style = new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: 'black',
				width: 0.4 //边框设置
			}),
			fill: new ol.style.Fill({
				color: '#CAE1FF' //图层设置
			}),
		})
		return style;
	}
});
//用于加载矢量交战区
var vector5 = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: '牛排岭data/交战区.json', // 地图来源
		format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
	}),
	style: function(feature) {
		var style = new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: 'black',
				width: 0.5 //边框设置
			}),
			fill: new ol.style.Fill({
				color: '#CD2626' //图层设置
			}),
		})
		return style;
	}
});
map.addLayer(vector4);
map.addLayer(vector1);
map.addLayer(vector2);
map.addLayer(vector5);
map.addLayer(vector3);
