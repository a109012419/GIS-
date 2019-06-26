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
					center: [800, -520],
					zoom: 0,
					projection: Pro,
				}),
				target: 'map'
			});
			//用于加载矢量太平军行军路线
			var vector1 = new ol.layer.Vector({
				source: new ol.source.Vector({
					url: '行军路线总览data/太平军行进路线.json', // 地图来源
					format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
				}),
				style: function(feature) {
					var style = new ol.style.Style({
						stroke: new ol.style.Stroke({
							color: 'red',
							width: 2 //边框设置
						}),
						fill: new ol.style.Fill({
							color: 'rgba(67, 205, 128, 1)' //图层设置
						})
					})
					return style;
				}
			});
			//用于加载矢量箭头
			var vector2 = new ol.layer.Vector({
				source: new ol.source.Vector({
					url: '行军路线总览data/arrows.json', // 地图来源
					format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
				}),
				style: function(feature) {
					var style = new ol.style.Style({
						stroke: new ol.style.Stroke({
							color: 'black',
							width: 0.2 //边框设置
						}),
						fill: new ol.style.Fill({
							color: 'red' //图层设置
						})
					})
					return style;
				}
			});
			//用于加载矢量地点
			var vector3 = new ol.layer.Vector({
				source: new ol.source.Vector({
					url: '行军路线总览data/city.json', // 地图来源
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
					style.getText().setText(feature.get('µØÃû'));
					return style;
				}
			});
			//用于加载矢量河流
			var vector4 = new ol.layer.Vector({
				source: new ol.source.Vector({
					url: '行军路线总览data/lake.json', // 地图来源
					format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
				}),
				style: function(feature) {
					var style = new ol.style.Style({
						stroke: new ol.style.Stroke({
							color: '#1E90FF',
							width: 1 //边框设置
						}),
						fill: new ol.style.Fill({
							color: '#1E90F' //图层设置
						}),
					})
					return style;
				}
			});
			//用于加载矢量战争点
			var vector5 = new ol.layer.Vector({
				source: new ol.source.Vector({
					url: '行军路线总览data/战争区域.json', // 地图来源
					format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
				}),
				style: function(feature) {
					var style = new ol.style.Style({
						stroke: new ol.style.Stroke({
							color: 'black',
							width: 0.0 //边框设置
						}),
						fill: new ol.style.Fill({
							color: 'black' //图层设置
						}),
					})
					return style;
				}
			});
			//用于加载矢量陆地
			var vector6 = new ol.layer.Vector({
				source: new ol.source.Vector({
					url: '行军路线总览data/陆地.json', // 地图来源
					format: new ol.format.GeoJSON() // 解析矢量地图的格式化类
				}),
				style: function(feature) {
					var style = new ol.style.Style({
						stroke: new ol.style.Stroke({
							color: 'black',
							width: 0.0 //边框设置
						}),
						fill: new ol.style.Fill({
							color: '#EEE9BF' //图层设置
						}),
					})
					return style;
				}
			});
			map.addLayer(vector6);//陆地
			map.addLayer(vector4);//河流
			map.addLayer(vector1);
			map.addLayer(vector2);
			map.addLayer(vector3);//地名
			map.addLayer(vector5);//交战区域