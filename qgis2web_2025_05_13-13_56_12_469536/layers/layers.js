var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ORTO3cyklusprezpadSR2023in2cyklus_1 = new ol.layer.Tile({
            'title': 'ORTO - 3. cyklus pre západ SR (2023), ináč 2. cyklus',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ofmozaika.tiles.freemap.sk/{z}/{x}/{y}.jpg'
            })
        });
var format_nehody2020_2 = new ol.format.GeoJSON();
var features_nehody2020_2 = format_nehody2020_2.readFeatures(json_nehody2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nehody2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nehody2020_2.addFeatures(features_nehody2020_2);
var lyr_nehody2020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nehody2020_2, 
                style: style_nehody2020_2,
                popuplayertitle: 'nehody 2020',
                interactive: true,
                title: '<img src="styles/legend/nehody2020_2.png" /> nehody 2020'
            });
var format_nehody2021_3 = new ol.format.GeoJSON();
var features_nehody2021_3 = format_nehody2021_3.readFeatures(json_nehody2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nehody2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nehody2021_3.addFeatures(features_nehody2021_3);
var lyr_nehody2021_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nehody2021_3, 
                style: style_nehody2021_3,
                popuplayertitle: 'nehody 2021 ',
                interactive: true,
                title: '<img src="styles/legend/nehody2021_3.png" /> nehody 2021 '
            });
var format_nehody2022_4 = new ol.format.GeoJSON();
var features_nehody2022_4 = format_nehody2022_4.readFeatures(json_nehody2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nehody2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nehody2022_4.addFeatures(features_nehody2022_4);
var lyr_nehody2022_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nehody2022_4, 
                style: style_nehody2022_4,
                popuplayertitle: 'nehody 2022',
                interactive: true,
                title: '<img src="styles/legend/nehody2022_4.png" /> nehody 2022'
            });
var format_okres_5 = new ol.format.GeoJSON();
var features_okres_5 = format_okres_5.readFeatures(json_okres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_okres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_okres_5.addFeatures(features_okres_5);
var lyr_okres_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_okres_5, 
                style: style_okres_5,
                popuplayertitle: 'okres',
                interactive: true,
                title: '<img src="styles/legend/okres_5.png" /> okres'
            });
var format_kraj_6 = new ol.format.GeoJSON();
var features_kraj_6 = format_kraj_6.readFeatures(json_kraj_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kraj_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kraj_6.addFeatures(features_kraj_6);
var lyr_kraj_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kraj_6, 
                style: style_kraj_6,
                popuplayertitle: 'kraj',
                interactive: true,
                title: '<img src="styles/legend/kraj_6.png" /> kraj'
            });
var group_HRANICE = new ol.layer.Group({
                                layers: [lyr_okres_5,lyr_kraj_6,],
                                fold: 'open',
                                title: 'HRANICE'});
var group_nehody = new ol.layer.Group({
                                layers: [lyr_nehody2020_2,lyr_nehody2021_3,lyr_nehody2022_4,],
                                fold: 'open',
                                title: 'nehody'});
var group_snimky = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_ORTO3cyklusprezpadSR2023in2cyklus_1,],
                                fold: 'open',
                                title: 'snimky'});

lyr_OpenStreetMap_0.setVisible(true);lyr_ORTO3cyklusprezpadSR2023in2cyklus_1.setVisible(true);lyr_nehody2020_2.setVisible(true);lyr_nehody2021_3.setVisible(true);lyr_nehody2022_4.setVisible(true);lyr_okres_5.setVisible(true);lyr_kraj_6.setVisible(true);
var layersList = [group_snimky,group_nehody,group_HRANICE];
lyr_nehody2020_2.set('fieldAliases', {'Dátum': 'Dátum', 'Kód.dopravnej.nehody': 'Kód.dopravnej.nehody', 'Rok': 'Rok', 'Čas': 'Čas', 'Okres': 'Okres', 'Číslo.cesty': 'Číslo.cesty', 'Lokalita.dopravnej.nehody': 'Lokalita.dopravnej.nehody', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'Kilometrovníkové.staničenie.dopravnej.nehody', 'Smerové.pomery': 'Smerové.pomery', 'Druh.nehody': 'Druh.nehody', 'Zrážka.vozidiel': 'Zrážka.vozidiel', 'Zavinenie.nehody': 'Zavinenie.nehody', 'Prítomnosť.alkoholu': 'Prítomnosť.alkoholu', 'Počet.zúčastnených.vozidiel': 'Počet.zúčastnených.vozidiel', 'Hlavná.príčina.nehody': 'Hlavná.príčina.nehody', 'Usmrtení': 'Usmrtení', 'Ťažko.zranení': 'Ťažko.zranení', 'Ľahko.zranení': 'Ľahko.zranení', 'Celková.hmotná.škoda': 'Celková.hmotná.škoda', 'Zemepisná.dĺžka': 'Zemepisná.dĺžka', 'Zemepisná.šírka': 'Zemepisná.šírka', });
lyr_nehody2021_3.set('fieldAliases', {'Dátum': 'Dátum', 'Kód.dopravnej.nehody': 'Kód.dopravnej.nehody', 'Rok': 'Rok', 'Čas': 'Čas', 'Okres': 'Okres', 'Číslo.cesty': 'Číslo.cesty', 'Lokalita.dopravnej.nehody': 'Lokalita.dopravnej.nehody', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'Kilometrovníkové.staničenie.dopravnej.nehody', 'Smerové.pomery': 'Smerové.pomery', 'Druh.nehody': 'Druh.nehody', 'Zrážka.vozidiel': 'Zrážka.vozidiel', 'Zavinenie.nehody': 'Zavinenie.nehody', 'Prítomnosť.alkoholu': 'Prítomnosť.alkoholu', 'Počet.zúčastnených.vozidiel': 'Počet.zúčastnených.vozidiel', 'Hlavná.príčina.nehody': 'Hlavná.príčina.nehody', 'Usmrtení': 'Usmrtení', 'Ťažko.zranení': 'Ťažko.zranení', 'Ľahko.zranení': 'Ľahko.zranení', 'Celková.hmotná.škoda': 'Celková.hmotná.škoda', 'Zemepisná.dĺžka': 'Zemepisná.dĺžka', 'Zemepisná.šírka': 'Zemepisná.šírka', });
lyr_nehody2022_4.set('fieldAliases', {'Dátum': 'Dátum', 'Kód.dopravnej.nehody': 'Kód.dopravnej.nehody', 'Rok': 'Rok', 'Čas': 'Čas', 'Okres': 'Okres', 'Číslo.cesty': 'Číslo.cesty', 'Lokalita.dopravnej.nehody': 'Lokalita.dopravnej.nehody', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'Kilometrovníkové.staničenie.dopravnej.nehody', 'Smerové.pomery': 'Smerové.pomery', 'Druh.nehody': 'Druh.nehody', 'Zrážka.vozidiel': 'Zrážka.vozidiel', 'Zavinenie.nehody': 'Zavinenie.nehody', 'Prítomnosť.alkoholu': 'Prítomnosť.alkoholu', 'Počet.zúčastnených.vozidiel': 'Počet.zúčastnených.vozidiel', 'Hlavná.príčina.nehody': 'Hlavná.príčina.nehody', 'Usmrtení': 'Usmrtení', 'Ťažko.zranení': 'Ťažko.zranení', 'Ľahko.zranení': 'Ľahko.zranení', 'Celková.hmotná.škoda': 'Celková.hmotná.škoda', 'Zemepisná.dĺžka': 'Zemepisná.dĺžka', 'Zemepisná.šírka': 'Zemepisná.šírka', });
lyr_okres_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DOW': 'DOW', 'AUT': 'AUT', 'ACH': 'ACH', 'SOI': 'SOI', 'FACC': 'FACC', 'IDN3': 'IDN3', 'NM3': 'NM3', 'IDN2': 'IDN2', 'NM2': 'NM2', 'VYMERA': 'VYMERA', 'NUTS1': 'NUTS1', 'NUTS1_CODE': 'NUTS1_CODE', 'NUTS2': 'NUTS2', 'NUTS2_CODE': 'NUTS2_CODE', 'NUTS3': 'NUTS3', 'NUTS3_CODE': 'NUTS3_CODE', 'LAU1': 'LAU1', 'LAU1_CODE': 'LAU1_CODE', });
lyr_kraj_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DOW': 'DOW', 'AUT': 'AUT', 'ACH': 'ACH', 'SOI': 'SOI', 'FACC': 'FACC', 'IDN2': 'IDN2', 'NM2': 'NM2', 'VYMERA': 'VYMERA', 'NUTS1': 'NUTS1', 'NUTS1_CODE': 'NUTS1_CODE', 'NUTS2': 'NUTS2', 'NUTS2_CODE': 'NUTS2_CODE', 'NUTS3': 'NUTS3', 'NUTS3_CODE': 'NUTS3_CODE', });
lyr_nehody2020_2.set('fieldImages', {'Dátum': 'TextEdit', 'Kód.dopravnej.nehody': 'TextEdit', 'Rok': 'Range', 'Čas': 'DateTime', 'Okres': 'TextEdit', 'Číslo.cesty': 'TextEdit', 'Lokalita.dopravnej.nehody': 'TextEdit', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'TextEdit', 'Smerové.pomery': 'TextEdit', 'Druh.nehody': 'TextEdit', 'Zrážka.vozidiel': 'TextEdit', 'Zavinenie.nehody': 'TextEdit', 'Prítomnosť.alkoholu': 'TextEdit', 'Počet.zúčastnených.vozidiel': 'Range', 'Hlavná.príčina.nehody': 'TextEdit', 'Usmrtení': 'TextEdit', 'Ťažko.zranení': 'TextEdit', 'Ľahko.zranení': 'TextEdit', 'Celková.hmotná.škoda': 'TextEdit', 'Zemepisná.dĺžka': 'TextEdit', 'Zemepisná.šírka': 'TextEdit', });
lyr_nehody2021_3.set('fieldImages', {'Dátum': 'TextEdit', 'Kód.dopravnej.nehody': 'TextEdit', 'Rok': 'Range', 'Čas': 'DateTime', 'Okres': 'TextEdit', 'Číslo.cesty': 'TextEdit', 'Lokalita.dopravnej.nehody': 'TextEdit', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'TextEdit', 'Smerové.pomery': 'TextEdit', 'Druh.nehody': 'TextEdit', 'Zrážka.vozidiel': 'TextEdit', 'Zavinenie.nehody': 'TextEdit', 'Prítomnosť.alkoholu': 'TextEdit', 'Počet.zúčastnených.vozidiel': 'Range', 'Hlavná.príčina.nehody': 'TextEdit', 'Usmrtení': 'TextEdit', 'Ťažko.zranení': 'TextEdit', 'Ľahko.zranení': 'TextEdit', 'Celková.hmotná.škoda': 'TextEdit', 'Zemepisná.dĺžka': 'TextEdit', 'Zemepisná.šírka': 'TextEdit', });
lyr_nehody2022_4.set('fieldImages', {'Dátum': 'TextEdit', 'Kód.dopravnej.nehody': 'TextEdit', 'Rok': 'Range', 'Čas': 'DateTime', 'Okres': 'TextEdit', 'Číslo.cesty': 'TextEdit', 'Lokalita.dopravnej.nehody': 'TextEdit', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'TextEdit', 'Smerové.pomery': 'TextEdit', 'Druh.nehody': 'TextEdit', 'Zrážka.vozidiel': 'TextEdit', 'Zavinenie.nehody': 'TextEdit', 'Prítomnosť.alkoholu': 'TextEdit', 'Počet.zúčastnených.vozidiel': 'Range', 'Hlavná.príčina.nehody': 'TextEdit', 'Usmrtení': 'TextEdit', 'Ťažko.zranení': 'TextEdit', 'Ľahko.zranení': 'TextEdit', 'Celková.hmotná.škoda': 'TextEdit', 'Zemepisná.dĺžka': 'TextEdit', 'Zemepisná.šírka': 'TextEdit', });
lyr_okres_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'DOW': 'DateTime', 'AUT': 'TextEdit', 'ACH': 'TextEdit', 'SOI': 'TextEdit', 'FACC': 'TextEdit', 'IDN3': 'Range', 'NM3': 'TextEdit', 'IDN2': 'Range', 'NM2': 'TextEdit', 'VYMERA': 'TextEdit', 'NUTS1': 'TextEdit', 'NUTS1_CODE': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS2_CODE': 'TextEdit', 'NUTS3': 'TextEdit', 'NUTS3_CODE': 'TextEdit', 'LAU1': 'TextEdit', 'LAU1_CODE': 'TextEdit', });
lyr_kraj_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'DOW': 'DateTime', 'AUT': 'TextEdit', 'ACH': 'TextEdit', 'SOI': 'TextEdit', 'FACC': 'TextEdit', 'IDN2': 'Range', 'NM2': 'TextEdit', 'VYMERA': 'TextEdit', 'NUTS1': 'TextEdit', 'NUTS1_CODE': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS2_CODE': 'TextEdit', 'NUTS3': 'TextEdit', 'NUTS3_CODE': 'TextEdit', });
lyr_nehody2020_2.set('fieldLabels', {'Dátum': 'no label', 'Kód.dopravnej.nehody': 'no label', 'Rok': 'no label', 'Čas': 'no label', 'Okres': 'no label', 'Číslo.cesty': 'no label', 'Lokalita.dopravnej.nehody': 'no label', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'no label', 'Smerové.pomery': 'no label', 'Druh.nehody': 'no label', 'Zrážka.vozidiel': 'no label', 'Zavinenie.nehody': 'no label', 'Prítomnosť.alkoholu': 'no label', 'Počet.zúčastnených.vozidiel': 'no label', 'Hlavná.príčina.nehody': 'no label', 'Usmrtení': 'no label', 'Ťažko.zranení': 'no label', 'Ľahko.zranení': 'no label', 'Celková.hmotná.škoda': 'no label', 'Zemepisná.dĺžka': 'no label', 'Zemepisná.šírka': 'no label', });
lyr_nehody2021_3.set('fieldLabels', {'Dátum': 'no label', 'Kód.dopravnej.nehody': 'no label', 'Rok': 'no label', 'Čas': 'no label', 'Okres': 'no label', 'Číslo.cesty': 'no label', 'Lokalita.dopravnej.nehody': 'no label', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'no label', 'Smerové.pomery': 'no label', 'Druh.nehody': 'no label', 'Zrážka.vozidiel': 'no label', 'Zavinenie.nehody': 'no label', 'Prítomnosť.alkoholu': 'no label', 'Počet.zúčastnených.vozidiel': 'no label', 'Hlavná.príčina.nehody': 'no label', 'Usmrtení': 'no label', 'Ťažko.zranení': 'no label', 'Ľahko.zranení': 'no label', 'Celková.hmotná.škoda': 'no label', 'Zemepisná.dĺžka': 'no label', 'Zemepisná.šírka': 'no label', });
lyr_nehody2022_4.set('fieldLabels', {'Dátum': 'no label', 'Kód.dopravnej.nehody': 'no label', 'Rok': 'no label', 'Čas': 'no label', 'Okres': 'no label', 'Číslo.cesty': 'no label', 'Lokalita.dopravnej.nehody': 'no label', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'no label', 'Smerové.pomery': 'no label', 'Druh.nehody': 'no label', 'Zrážka.vozidiel': 'no label', 'Zavinenie.nehody': 'no label', 'Prítomnosť.alkoholu': 'no label', 'Počet.zúčastnených.vozidiel': 'no label', 'Hlavná.príčina.nehody': 'no label', 'Usmrtení': 'no label', 'Ťažko.zranení': 'no label', 'Ľahko.zranení': 'no label', 'Celková.hmotná.škoda': 'no label', 'Zemepisná.dĺžka': 'no label', 'Zemepisná.šírka': 'no label', });
lyr_okres_5.set('fieldLabels', {'OBJECTID': 'no label', 'DOW': 'no label', 'AUT': 'no label', 'ACH': 'no label', 'SOI': 'no label', 'FACC': 'no label', 'IDN3': 'no label', 'NM3': 'no label', 'IDN2': 'no label', 'NM2': 'no label', 'VYMERA': 'no label', 'NUTS1': 'no label', 'NUTS1_CODE': 'no label', 'NUTS2': 'no label', 'NUTS2_CODE': 'no label', 'NUTS3': 'no label', 'NUTS3_CODE': 'no label', 'LAU1': 'no label', 'LAU1_CODE': 'no label', });
lyr_kraj_6.set('fieldLabels', {'OBJECTID': 'no label', 'DOW': 'no label', 'AUT': 'no label', 'ACH': 'no label', 'SOI': 'no label', 'FACC': 'no label', 'IDN2': 'no label', 'NM2': 'no label', 'VYMERA': 'no label', 'NUTS1': 'no label', 'NUTS1_CODE': 'no label', 'NUTS2': 'no label', 'NUTS2_CODE': 'no label', 'NUTS3': 'no label', 'NUTS3_CODE': 'no label', });
lyr_kraj_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});