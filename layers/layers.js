var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_DistritosEducativosZ5_1 = new ol.format.GeoJSON();
var features_DistritosEducativosZ5_1 = format_DistritosEducativosZ5_1.readFeatures(json_DistritosEducativosZ5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosEducativosZ5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosEducativosZ5_1.addFeatures(features_DistritosEducativosZ5_1);
var lyr_DistritosEducativosZ5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosEducativosZ5_1, 
                style: style_DistritosEducativosZ5_1,
                popuplayertitle: 'Distritos Educativos Z5',
                interactive: true,
    title: 'Distritos Educativos Z5<br />\
    <img src="styles/legend/DistritosEducativosZ5_1_0.png" /> BOLÍVAR<br />\
    <img src="styles/legend/DistritosEducativosZ5_1_1.png" /> GALÁPAGOS<br />\
    <img src="styles/legend/DistritosEducativosZ5_1_2.png" /> GUAYAS<br />\
    <img src="styles/legend/DistritosEducativosZ5_1_3.png" /> LOS RÍOS<br />\
    <img src="styles/legend/DistritosEducativosZ5_1_4.png" /> SANTA ELENA<br />' });
var format_EstablecEducInactivos_2 = new ol.format.GeoJSON();
var features_EstablecEducInactivos_2 = format_EstablecEducInactivos_2.readFeatures(json_EstablecEducInactivos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstablecEducInactivos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstablecEducInactivos_2.addFeatures(features_EstablecEducInactivos_2);
var lyr_EstablecEducInactivos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstablecEducInactivos_2,
maxResolution:56.00893230452392,
 
                style: style_EstablecEducInactivos_2,
                popuplayertitle: 'Establec. Educ. Inactivos',
                interactive: true,
                title: '<img src="styles/legend/EstablecEducInactivos_2.png" /> Establec. Educ. Inactivos'
            });
var format_EstablecEducActivos_3 = new ol.format.GeoJSON();
var features_EstablecEducActivos_3 = format_EstablecEducActivos_3.readFeatures(json_EstablecEducActivos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstablecEducActivos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstablecEducActivos_3.addFeatures(features_EstablecEducActivos_3);
var lyr_EstablecEducActivos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstablecEducActivos_3,
maxResolution:56.00893230452392,
 
                style: style_EstablecEducActivos_3,
                popuplayertitle: 'Establec. Educ. Activos',
                interactive: true,
                title: '<img src="styles/legend/EstablecEducActivos_3.png" /> Establec. Educ. Activos'
            });

lyr_Googlemaps_0.setVisible(true);lyr_DistritosEducativosZ5_1.setVisible(true);lyr_EstablecEducInactivos_2.setVisible(true);lyr_EstablecEducActivos_3.setVisible(false);
var layersList = [lyr_Googlemaps_0,lyr_DistritosEducativosZ5_1,lyr_EstablecEducInactivos_2,lyr_EstablecEducActivos_3];
lyr_DistritosEducativosZ5_1.set('fieldAliases', {'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'DA_DIST': 'DA_DIST', 'DA_ZONA': 'DA_ZONA', });
lyr_EstablecEducInactivos_2.set('fieldAliases', {'amie': 'amie', 'ie': 'ie', 'estado': 'estado', 'sostenimie': 'sostenimie', 'oferta': 'oferta', 'distrito': 'distrito', 'dpa_provin': 'dpa_provin', 'provincia': 'provincia', 'dpa_canton': 'dpa_canton', 'canton': 'canton', 'cod_parroq': 'cod_parroq', 'parroquia': 'parroquia', 'x': 'x', 'y': 'y', 'geocodigo': 'geocodigo', 'reapertura': 'reapertura', 'zona': 'zona', });
lyr_EstablecEducActivos_3.set('fieldAliases', {'amie': 'amie', 'ie': 'ie', 'estado': 'estado', 'jurisdicci': 'jurisdicci', 'sostenimie': 'sostenimie', 'oferta1': 'oferta1', 'oferta2': 'oferta2', 'oferta3': 'oferta3', 'oferta4': 'oferta4', 'jornada': 'jornada', 'regimen': 'regimen', 'da_zona': 'da_zona', 'da_dist': 'da_dist', 'nom_distri': 'nom_distri', 'dpa_parroq': 'dpa_parroq', 'dpa_despar': 'dpa_despar', 'dpa_canton': 'dpa_canton', 'dpa_descan': 'dpa_descan', 'dpa_provin': 'dpa_provin', 'dpa_despro': 'dpa_despro', 'x_f': 'x_f', 'y_f': 'y_f', 'geocodigo': 'geocodigo', 'tipo_e': 'tipo_e', 'areainec': 'areainec', 'acceso': 'acceso', 'no_est': 'no_est', 'no_doc': 'no_doc', 'no_admin': 'no_admin', 'susc_inund': 'susc_inund', 'near_river': 'near_river', 'susc_movim': 'susc_movim', 'susc_tsuna': 'susc_tsuna', 'altura_m': 'altura_m', 'fuente_tsu': 'fuente_tsu', 'susc_sismo': 'susc_sismo', 'aceleracio': 'aceleracio', 'volcan': 'volcan', 'tipo_pvol': 'tipo_pvol', 'posibili_p': 'posibili_p', 'susc_inc_f': 'susc_inc_f', 'erosion_hi': 'erosion_hi', 'calif_at': 'calif_at', });
lyr_DistritosEducativosZ5_1.set('fieldImages', {'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DA_DIST': 'TextEdit', 'DA_ZONA': 'Range', });
lyr_EstablecEducInactivos_2.set('fieldImages', {'amie': 'TextEdit', 'ie': 'TextEdit', 'estado': 'TextEdit', 'sostenimie': 'TextEdit', 'oferta': 'TextEdit', 'distrito': 'TextEdit', 'dpa_provin': 'TextEdit', 'provincia': 'TextEdit', 'dpa_canton': 'TextEdit', 'canton': 'TextEdit', 'cod_parroq': 'TextEdit', 'parroquia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'geocodigo': 'TextEdit', 'reapertura': 'TextEdit', 'zona': 'TextEdit', });
lyr_EstablecEducActivos_3.set('fieldImages', {'amie': 'TextEdit', 'ie': 'TextEdit', 'estado': 'TextEdit', 'jurisdicci': 'TextEdit', 'sostenimie': 'TextEdit', 'oferta1': 'TextEdit', 'oferta2': 'TextEdit', 'oferta3': 'TextEdit', 'oferta4': 'TextEdit', 'jornada': 'TextEdit', 'regimen': 'TextEdit', 'da_zona': 'TextEdit', 'da_dist': 'TextEdit', 'nom_distri': 'TextEdit', 'dpa_parroq': 'TextEdit', 'dpa_despar': 'TextEdit', 'dpa_canton': 'TextEdit', 'dpa_descan': 'TextEdit', 'dpa_provin': 'TextEdit', 'dpa_despro': 'TextEdit', 'x_f': 'TextEdit', 'y_f': 'TextEdit', 'geocodigo': 'TextEdit', 'tipo_e': 'TextEdit', 'areainec': 'TextEdit', 'acceso': 'TextEdit', 'no_est': 'TextEdit', 'no_doc': 'TextEdit', 'no_admin': 'TextEdit', 'susc_inund': 'TextEdit', 'near_river': 'TextEdit', 'susc_movim': 'TextEdit', 'susc_tsuna': 'TextEdit', 'altura_m': 'TextEdit', 'fuente_tsu': 'TextEdit', 'susc_sismo': 'TextEdit', 'aceleracio': 'TextEdit', 'volcan': 'TextEdit', 'tipo_pvol': 'TextEdit', 'posibili_p': 'TextEdit', 'susc_inc_f': 'TextEdit', 'erosion_hi': 'TextEdit', 'calif_at': 'TextEdit', });
lyr_DistritosEducativosZ5_1.set('fieldLabels', {'DPA_PROVIN': 'inline label - always visible', 'DPA_DESPRO': 'inline label - always visible', 'DA_DIST': 'inline label - always visible', 'DA_ZONA': 'inline label - always visible', });
lyr_EstablecEducInactivos_2.set('fieldLabels', {'amie': 'inline label - always visible', 'ie': 'inline label - always visible', 'estado': 'inline label - always visible', 'sostenimie': 'inline label - always visible', 'oferta': 'inline label - always visible', 'distrito': 'inline label - always visible', 'dpa_provin': 'inline label - always visible', 'provincia': 'inline label - always visible', 'dpa_canton': 'inline label - always visible', 'canton': 'inline label - always visible', 'cod_parroq': 'inline label - always visible', 'parroquia': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'geocodigo': 'inline label - always visible', 'reapertura': 'inline label - always visible', 'zona': 'inline label - always visible', });
lyr_EstablecEducActivos_3.set('fieldLabels', {'amie': 'inline label - always visible', 'ie': 'inline label - always visible', 'estado': 'inline label - always visible', 'jurisdicci': 'inline label - always visible', 'sostenimie': 'inline label - always visible', 'oferta1': 'inline label - always visible', 'oferta2': 'inline label - always visible', 'oferta3': 'inline label - always visible', 'oferta4': 'inline label - always visible', 'jornada': 'inline label - always visible', 'regimen': 'inline label - always visible', 'da_zona': 'inline label - always visible', 'da_dist': 'inline label - always visible', 'nom_distri': 'inline label - always visible', 'dpa_parroq': 'inline label - always visible', 'dpa_despar': 'inline label - always visible', 'dpa_canton': 'inline label - always visible', 'dpa_descan': 'inline label - always visible', 'dpa_provin': 'inline label - always visible', 'dpa_despro': 'inline label - always visible', 'x_f': 'inline label - always visible', 'y_f': 'inline label - always visible', 'geocodigo': 'inline label - always visible', 'tipo_e': 'inline label - always visible', 'areainec': 'inline label - always visible', 'acceso': 'inline label - always visible', 'no_est': 'inline label - always visible', 'no_doc': 'inline label - always visible', 'no_admin': 'inline label - always visible', 'susc_inund': 'inline label - always visible', 'near_river': 'inline label - always visible', 'susc_movim': 'inline label - always visible', 'susc_tsuna': 'inline label - always visible', 'altura_m': 'inline label - always visible', 'fuente_tsu': 'inline label - always visible', 'susc_sismo': 'inline label - always visible', 'aceleracio': 'inline label - always visible', 'volcan': 'inline label - always visible', 'tipo_pvol': 'inline label - always visible', 'posibili_p': 'inline label - always visible', 'susc_inc_f': 'inline label - always visible', 'erosion_hi': 'inline label - always visible', 'calif_at': 'inline label - always visible', });
lyr_EstablecEducActivos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});