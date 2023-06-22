var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PopulationSqMile_1 = new ol.format.GeoJSON();
var features_PopulationSqMile_1 = format_PopulationSqMile_1.readFeatures(json_PopulationSqMile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationSqMile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationSqMile_1.addFeatures(features_PopulationSqMile_1);
var lyr_PopulationSqMile_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationSqMile_1, 
                style: style_PopulationSqMile_1,
                interactive: true,
    title: 'Population/Sq. Mile<br />\
    <img src="styles/legend/PopulationSqMile_1_0.png" /> 14 - 50<br />\
    <img src="styles/legend/PopulationSqMile_1_1.png" /> 50 - 100<br />\
    <img src="styles/legend/PopulationSqMile_1_2.png" /> 100 - 150<br />\
    <img src="styles/legend/PopulationSqMile_1_3.png" /> 150 - 200<br />\
    <img src="styles/legend/PopulationSqMile_1_4.png" /> 200 - 250<br />\
    <img src="styles/legend/PopulationSqMile_1_5.png" /> 250 - 300<br />\
    <img src="styles/legend/PopulationSqMile_1_6.png" /> 300 - 325<br />'
        });
var format_WaterSprings_2 = new ol.format.GeoJSON();
var features_WaterSprings_2 = format_WaterSprings_2.readFeatures(json_WaterSprings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterSprings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterSprings_2.addFeatures(features_WaterSprings_2);
var lyr_WaterSprings_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterSprings_2, 
                style: style_WaterSprings_2,
                interactive: true,
                title: '<img src="styles/legend/WaterSprings_2.png" /> Water Springs'
            });
var format_GolfCourses_3 = new ol.format.GeoJSON();
var features_GolfCourses_3 = format_GolfCourses_3.readFeatures(json_GolfCourses_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GolfCourses_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GolfCourses_3.addFeatures(features_GolfCourses_3);
var lyr_GolfCourses_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GolfCourses_3, 
                style: style_GolfCourses_3,
                interactive: true,
                title: '<img src="styles/legend/GolfCourses_3.png" /> Golf Courses'
            });
var format_FloatTripOutfitters_4 = new ol.format.GeoJSON();
var features_FloatTripOutfitters_4 = format_FloatTripOutfitters_4.readFeatures(json_FloatTripOutfitters_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloatTripOutfitters_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloatTripOutfitters_4.addFeatures(features_FloatTripOutfitters_4);
var lyr_FloatTripOutfitters_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloatTripOutfitters_4, 
                style: style_FloatTripOutfitters_4,
                interactive: true,
                title: '<img src="styles/legend/FloatTripOutfitters_4.png" /> Float Trip Outfitters'
            });
var format_Wineries_5 = new ol.format.GeoJSON();
var features_Wineries_5 = format_Wineries_5.readFeatures(json_Wineries_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wineries_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wineries_5.addFeatures(features_Wineries_5);
var lyr_Wineries_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wineries_5, 
                style: style_Wineries_5,
                interactive: true,
                title: '<img src="styles/legend/Wineries_5.png" /> Wineries'
            });
var format_GroceryStores_6 = new ol.format.GeoJSON();
var features_GroceryStores_6 = format_GroceryStores_6.readFeatures(json_GroceryStores_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroceryStores_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroceryStores_6.addFeatures(features_GroceryStores_6);
var lyr_GroceryStores_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroceryStores_6, 
                style: style_GroceryStores_6,
                interactive: true,
                title: '<img src="styles/legend/GroceryStores_6.png" /> Grocery Stores'
            });
var format_Restaurants_7 = new ol.format.GeoJSON();
var features_Restaurants_7 = format_Restaurants_7.readFeatures(json_Restaurants_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurants_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurants_7.addFeatures(features_Restaurants_7);
var lyr_Restaurants_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restaurants_7, 
                style: style_Restaurants_7,
                interactive: true,
                title: '<img src="styles/legend/Restaurants_7.png" /> Restaurants'
            });
var format_RestaurantsNames_8 = new ol.format.GeoJSON();
var features_RestaurantsNames_8 = format_RestaurantsNames_8.readFeatures(json_RestaurantsNames_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestaurantsNames_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestaurantsNames_8.addFeatures(features_RestaurantsNames_8);
var lyr_RestaurantsNames_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RestaurantsNames_8, 
                style: style_RestaurantsNames_8,
                interactive: true,
                title: '<img src="styles/legend/RestaurantsNames_8.png" /> Restaurants + Names'
            });
var format_Q22022_9 = new ol.format.GeoJSON();
var features_Q22022_9 = format_Q22022_9.readFeatures(json_Q22022_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q22022_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q22022_9.addFeatures(features_Q22022_9);
var lyr_Q22022_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Q22022_9, 
                style: style_Q22022_9,
                interactive: true,
    title: '<div style="padding-bottom:7px">Q2 2022</div><hr style="padding-left:150px;">'
});
var format_Q32022_10 = new ol.format.GeoJSON();
var features_Q32022_10 = format_Q32022_10.readFeatures(json_Q32022_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q32022_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q32022_10.addFeatures(features_Q32022_10);
var lyr_Q32022_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Q32022_10, 
                style: style_Q32022_10,
                interactive: true,
    title: 'Q3 2022<br />'
});
var format_Q42022_11 = new ol.format.GeoJSON();
var features_Q42022_11 = format_Q42022_11.readFeatures(json_Q42022_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q42022_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q42022_11.addFeatures(features_Q42022_11);
var lyr_Q42022_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Q42022_11, 
                style: style_Q42022_11,
                interactive: true,
    title: 'Q4 2022<br />'
});
var format_Q12023_12 = new ol.format.GeoJSON();
var features_Q12023_12 = format_Q12023_12.readFeatures(json_Q12023_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q12023_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q12023_12.addFeatures(features_Q12023_12);
var lyr_Q12023_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Q12023_12, 
                style: style_Q12023_12,
                interactive: true,
    title: 'Q1 2023<br />'
});
var format_Q22023_13 = new ol.format.GeoJSON();
var features_Q22023_13 = format_Q22023_13.readFeatures(json_Q22023_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q22023_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q22023_13.addFeatures(features_Q22023_13);
var lyr_Q22023_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Q22023_13, 
                style: style_Q22023_13,
                interactive: true,
    title: 'Q2 2023<br />'
        });
var format_KeyLocationsAttractions_14 = new ol.format.GeoJSON();
var features_KeyLocationsAttractions_14 = format_KeyLocationsAttractions_14.readFeatures(json_KeyLocationsAttractions_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeyLocationsAttractions_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyLocationsAttractions_14.addFeatures(features_KeyLocationsAttractions_14);
var lyr_KeyLocationsAttractions_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KeyLocationsAttractions_14, 
                style: style_KeyLocationsAttractions_14,
                interactive: true,
                title: '\
                    <img src="styles/legend/KeyLocationsAttractions_14.png" /> Key Locations/Attractions<br /><hr />\
                    <div style="position: relative; left:0;">\
                        <p style="text-decoration:underline; font-weight:bold; padding-left:25px">Real Estate Data</p>\
                        <p style="padding-left:35px">Home Prices</p>\
                        <img src="styles/legend/Q22023_13_0.png" /> 200,000 - 350,000<br />\
                        <img src="styles/legend/Q22023_13_1.png" /> 350,000 - 500,000<br />\
                        <img src="styles/legend/Q22023_13_2.png" /> 500,000 - 650,000<br />\
                        <img src="styles/legend/Q22023_13_3.png" /> 650,000 - 800,000<br />\
                        <img src="styles/legend/Q22023_13_4.png" /> 800,000 - 3,000,000\<br><br>\
                    </div>'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PopulationSqMile_1.setVisible(false);lyr_WaterSprings_2.setVisible(false);lyr_GolfCourses_3.setVisible(false);lyr_FloatTripOutfitters_4.setVisible(false);lyr_Wineries_5.setVisible(false);lyr_GroceryStores_6.setVisible(false);lyr_Restaurants_7.setVisible(false);lyr_RestaurantsNames_8.setVisible(false);lyr_Q22022_9.setVisible(false);lyr_Q32022_10.setVisible(false);lyr_Q42022_11.setVisible(false);lyr_Q12023_12.setVisible(false);lyr_Q22023_13.setVisible(true);lyr_KeyLocationsAttractions_14.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_PopulationSqMile_1,lyr_WaterSprings_2,lyr_GolfCourses_3,lyr_FloatTripOutfitters_4,lyr_Wineries_5,lyr_GroceryStores_6,lyr_Restaurants_7,lyr_RestaurantsNames_8,lyr_Q22022_9,lyr_Q32022_10,lyr_Q42022_11,lyr_Q12023_12,lyr_Q22023_13,lyr_KeyLocationsAttractions_14];
lyr_PopulationSqMile_1.set('fieldAliases', {'FID': 'FID', 'ZCTA5CE20': 'ZCTA5CE20', 'GEOID20': 'GEOID20', 'CLASSFP20': 'CLASSFP20', 'MTFCC20': 'MTFCC20', 'FUNCSTAT20': 'FUNCSTAT20', 'ALAND20': 'ALAND20', 'AWATER20': 'AWATER20', 'INTPTLAT20': 'INTPTLAT20', 'INTPTLON20': 'INTPTLON20', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'popdensity': 'popdensity', });
lyr_WaterSprings_2.set('fieldAliases', {'ABBOT SPRING': 'ABBOT SPRING', });
lyr_GolfCourses_3.set('fieldAliases', {'Name': 'Name', 'Website': 'Website', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_FloatTripOutfitters_4.set('fieldAliases', {'Name': 'Name', 'Website': 'Website', 'River': 'River', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Wineries_5.set('fieldAliases', {'Name': 'Name', 'Website': 'Website', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_GroceryStores_6.set('fieldAliases', {'Name': 'Name', 'Website': 'Website', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Restaurants_7.set('fieldAliases', {'Name': 'Name', 'Website': 'Website', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RestaurantsNames_8.set('fieldAliases', {'Name': 'Name', 'Website': 'Website', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Q22022_9.set('fieldAliases', {'SALE TYPE': 'SALE TYPE', 'SOLD DATE': 'SOLD DATE', 'PROPERTY TYPE': 'PROPERTY TYPE', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE OR PROVINCE': 'STATE OR PROVINCE', 'ZIP OR POSTAL CODE': 'ZIP OR POSTAL CODE', 'PRICE': 'PRICE', 'BEDS': 'BEDS', 'BATHS': 'BATHS', 'LOCATION': 'LOCATION', 'SQUARE FEET': 'SQUARE FEET', 'LOT SIZE': 'LOT SIZE', 'YEAR BUILT': 'YEAR BUILT', 'DAYS ON MARKET': 'DAYS ON MARKET', '$/SQUARE FEET': '$/SQUARE FEET', 'HOA/MONTH': 'HOA/MONTH', 'STATUS': 'STATUS', 'NEXT OPEN HOUSE START TIME': 'NEXT OPEN HOUSE START TIME', 'NEXT OPEN HOUSE END TIME': 'NEXT OPEN HOUSE END TIME', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)', 'SOURCE': 'SOURCE', 'MLS#': 'MLS#', 'FAVORITE': 'FAVORITE', 'INTERESTED': 'INTERESTED', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ListText': 'ListText', });
lyr_Q32022_10.set('fieldAliases', {'SALE TYPE': 'SALE TYPE', 'SOLD DATE': 'SOLD DATE', 'PROPERTY TYPE': 'PROPERTY TYPE', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE OR PROVINCE': 'STATE OR PROVINCE', 'ZIP OR POSTAL CODE': 'ZIP OR POSTAL CODE', 'PRICE': 'PRICE', 'BEDS': 'BEDS', 'BATHS': 'BATHS', 'LOCATION': 'LOCATION', 'SQUARE FEET': 'SQUARE FEET', 'LOT SIZE': 'LOT SIZE', 'YEAR BUILT': 'YEAR BUILT', 'DAYS ON MARKET': 'DAYS ON MARKET', '$/SQUARE FEET': '$/SQUARE FEET', 'HOA/MONTH': 'HOA/MONTH', 'STATUS': 'STATUS', 'NEXT OPEN HOUSE START TIME': 'NEXT OPEN HOUSE START TIME', 'NEXT OPEN HOUSE END TIME': 'NEXT OPEN HOUSE END TIME', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)', 'SOURCE': 'SOURCE', 'MLS#': 'MLS#', 'FAVORITE': 'FAVORITE', 'INTERESTED': 'INTERESTED', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ListText': 'ListText', });
lyr_Q42022_11.set('fieldAliases', {'SALE TYPE': 'SALE TYPE', 'SOLD DATE': 'SOLD DATE', 'PROPERTY TYPE': 'PROPERTY TYPE', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE OR PROVINCE': 'STATE OR PROVINCE', 'ZIP OR POSTAL CODE': 'ZIP OR POSTAL CODE', 'PRICE': 'PRICE', 'BEDS': 'BEDS', 'BATHS': 'BATHS', 'LOCATION': 'LOCATION', 'SQUARE FEET': 'SQUARE FEET', 'LOT SIZE': 'LOT SIZE', 'YEAR BUILT': 'YEAR BUILT', 'DAYS ON MARKET': 'DAYS ON MARKET', '$/SQUARE FEET': '$/SQUARE FEET', 'HOA/MONTH': 'HOA/MONTH', 'STATUS': 'STATUS', 'NEXT OPEN HOUSE START TIME': 'NEXT OPEN HOUSE START TIME', 'NEXT OPEN HOUSE END TIME': 'NEXT OPEN HOUSE END TIME', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)', 'SOURCE': 'SOURCE', 'MLS#': 'MLS#', 'FAVORITE': 'FAVORITE', 'INTERESTED': 'INTERESTED', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ListText': 'ListText', });
lyr_Q12023_12.set('fieldAliases', {'SALE TYPE': 'SALE TYPE', 'SOLD DATE': 'SOLD DATE', 'PROPERTY TYPE': 'PROPERTY TYPE', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE OR PROVINCE': 'STATE OR PROVINCE', 'ZIP OR POSTAL CODE': 'ZIP OR POSTAL CODE', 'PRICE': 'PRICE', 'BEDS': 'BEDS', 'BATHS': 'BATHS', 'LOCATION': 'LOCATION', 'SQUARE FEET': 'SQUARE FEET', 'LOT SIZE': 'LOT SIZE', 'YEAR BUILT': 'YEAR BUILT', 'DAYS ON MARKET': 'DAYS ON MARKET', '$/SQUARE FEET': '$/SQUARE FEET', 'HOA/MONTH': 'HOA/MONTH', 'STATUS': 'STATUS', 'NEXT OPEN HOUSE START TIME': 'NEXT OPEN HOUSE START TIME', 'NEXT OPEN HOUSE END TIME': 'NEXT OPEN HOUSE END TIME', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)', 'SOURCE': 'SOURCE', 'MLS#': 'MLS#', 'FAVORITE': 'FAVORITE', 'INTERESTED': 'INTERESTED', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ListText': 'ListText', });
lyr_Q22023_13.set('fieldAliases', {'SALE TYPE': 'SALE TYPE', 'SOLD DATE': 'SOLD DATE', 'PROPERTY TYPE': 'PROPERTY TYPE', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE OR PROVINCE': 'STATE OR PROVINCE', 'ZIP OR POSTAL CODE': 'ZIP OR POSTAL CODE', 'PRICE': 'PRICE', 'BEDS': 'BEDS', 'BATHS': 'BATHS', 'LOCATION': 'LOCATION', 'SQUARE FEET': 'SQUARE FEET', 'LOT SIZE': 'LOT SIZE', 'YEAR BUILT': 'YEAR BUILT', 'DAYS ON MARKET': 'DAYS ON MARKET', '$/SQUARE FEET': '$/SQUARE FEET', 'HOA/MONTH': 'HOA/MONTH', 'STATUS': 'STATUS', 'NEXT OPEN HOUSE START TIME': 'NEXT OPEN HOUSE START TIME', 'NEXT OPEN HOUSE END TIME': 'NEXT OPEN HOUSE END TIME', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)', 'SOURCE': 'SOURCE', 'MLS#': 'MLS#', 'FAVORITE': 'FAVORITE', 'INTERESTED': 'INTERESTED', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ListText': 'ListText', });
lyr_KeyLocationsAttractions_14.set('fieldAliases', {'Name': 'Name', 'Info': 'Info', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PopulationSqMile_1.set('fieldImages', {'FID': 'Range', 'ZCTA5CE20': 'TextEdit', 'GEOID20': 'TextEdit', 'CLASSFP20': 'TextEdit', 'MTFCC20': 'TextEdit', 'FUNCSTAT20': 'TextEdit', 'ALAND20': 'Range', 'AWATER20': 'Range', 'INTPTLAT20': 'TextEdit', 'INTPTLON20': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'popdensity': 'TextEdit', });
lyr_WaterSprings_2.set('fieldImages', {'ABBOT SPRING': 'TextEdit', });
lyr_GolfCourses_3.set('fieldImages', {'Name': 'TextEdit', 'Website': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_FloatTripOutfitters_4.set('fieldImages', {'Name': 'TextEdit', 'Website': 'TextEdit', 'River': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Wineries_5.set('fieldImages', {'Name': 'TextEdit', 'Website': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_GroceryStores_6.set('fieldImages', {'Name': 'TextEdit', 'Website': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Restaurants_7.set('fieldImages', {'Name': 'TextEdit', 'Website': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_RestaurantsNames_8.set('fieldImages', {'Name': 'TextEdit', 'Website': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Q22022_9.set('fieldImages', {'SALE TYPE': 'TextEdit', 'SOLD DATE': 'TextEdit', 'PROPERTY TYPE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE OR PROVINCE': 'TextEdit', 'ZIP OR POSTAL CODE': 'Range', 'PRICE': 'Range', 'BEDS': 'Range', 'BATHS': 'TextEdit', 'LOCATION': 'TextEdit', 'SQUARE FEET': 'Range', 'LOT SIZE': 'Range', 'YEAR BUILT': 'TextEdit', 'DAYS ON MARKET': 'Range', '$/SQUARE FEET': 'Range', 'HOA/MONTH': 'TextEdit', 'STATUS': 'TextEdit', 'NEXT OPEN HOUSE START TIME': 'TextEdit', 'NEXT OPEN HOUSE END TIME': 'TextEdit', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'TextEdit', 'SOURCE': 'TextEdit', 'MLS#': 'Range', 'FAVORITE': 'TextEdit', 'INTERESTED': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ListText': 'TextEdit', });
lyr_Q32022_10.set('fieldImages', {'SALE TYPE': 'TextEdit', 'SOLD DATE': 'TextEdit', 'PROPERTY TYPE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE OR PROVINCE': 'TextEdit', 'ZIP OR POSTAL CODE': 'Range', 'PRICE': 'Range', 'BEDS': 'Range', 'BATHS': 'TextEdit', 'LOCATION': 'TextEdit', 'SQUARE FEET': 'Range', 'LOT SIZE': 'Range', 'YEAR BUILT': 'Range', 'DAYS ON MARKET': 'Range', '$/SQUARE FEET': 'Range', 'HOA/MONTH': 'TextEdit', 'STATUS': 'TextEdit', 'NEXT OPEN HOUSE START TIME': 'TextEdit', 'NEXT OPEN HOUSE END TIME': 'TextEdit', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'TextEdit', 'SOURCE': 'TextEdit', 'MLS#': 'Range', 'FAVORITE': 'TextEdit', 'INTERESTED': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ListText': 'TextEdit', });
lyr_Q42022_11.set('fieldImages', {'SALE TYPE': 'TextEdit', 'SOLD DATE': 'TextEdit', 'PROPERTY TYPE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE OR PROVINCE': 'TextEdit', 'ZIP OR POSTAL CODE': 'Range', 'PRICE': 'Range', 'BEDS': 'Range', 'BATHS': 'TextEdit', 'LOCATION': 'TextEdit', 'SQUARE FEET': 'Range', 'LOT SIZE': 'Range', 'YEAR BUILT': 'Range', 'DAYS ON MARKET': 'Range', '$/SQUARE FEET': 'Range', 'HOA/MONTH': 'TextEdit', 'STATUS': 'TextEdit', 'NEXT OPEN HOUSE START TIME': 'TextEdit', 'NEXT OPEN HOUSE END TIME': 'TextEdit', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'TextEdit', 'SOURCE': 'TextEdit', 'MLS#': 'Range', 'FAVORITE': 'TextEdit', 'INTERESTED': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ListText': 'TextEdit', });
lyr_Q12023_12.set('fieldImages', {'SALE TYPE': 'TextEdit', 'SOLD DATE': 'TextEdit', 'PROPERTY TYPE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE OR PROVINCE': 'TextEdit', 'ZIP OR POSTAL CODE': 'Range', 'PRICE': 'Range', 'BEDS': 'Range', 'BATHS': 'TextEdit', 'LOCATION': 'TextEdit', 'SQUARE FEET': 'Range', 'LOT SIZE': 'Range', 'YEAR BUILT': 'Range', 'DAYS ON MARKET': 'Range', '$/SQUARE FEET': 'Range', 'HOA/MONTH': 'Range', 'STATUS': 'TextEdit', 'NEXT OPEN HOUSE START TIME': 'TextEdit', 'NEXT OPEN HOUSE END TIME': 'TextEdit', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'TextEdit', 'SOURCE': 'TextEdit', 'MLS#': 'Range', 'FAVORITE': 'TextEdit', 'INTERESTED': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ListText': 'TextEdit', });
lyr_Q22023_13.set('fieldImages', {'SALE TYPE': 'TextEdit', 'SOLD DATE': 'TextEdit', 'PROPERTY TYPE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE OR PROVINCE': 'TextEdit', 'ZIP OR POSTAL CODE': 'Range', 'PRICE': 'Range', 'BEDS': 'Range', 'BATHS': 'TextEdit', 'LOCATION': 'TextEdit', 'SQUARE FEET': 'Range', 'LOT SIZE': 'Range', 'YEAR BUILT': 'Range', 'DAYS ON MARKET': 'Range', '$/SQUARE FEET': 'Range', 'HOA/MONTH': 'Range', 'STATUS': 'TextEdit', 'NEXT OPEN HOUSE START TIME': 'TextEdit', 'NEXT OPEN HOUSE END TIME': 'TextEdit', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'TextEdit', 'SOURCE': 'TextEdit', 'MLS#': 'Range', 'FAVORITE': 'TextEdit', 'INTERESTED': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ListText': 'TextEdit', });
lyr_KeyLocationsAttractions_14.set('fieldImages', {'Name': 'TextEdit', 'Info': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_PopulationSqMile_1.set('fieldLabels', {'FID': 'no label', 'ZCTA5CE20': 'no label', 'GEOID20': 'no label', 'CLASSFP20': 'no label', 'MTFCC20': 'no label', 'FUNCSTAT20': 'no label', 'ALAND20': 'no label', 'AWATER20': 'no label', 'INTPTLAT20': 'no label', 'INTPTLON20': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'popdensity': 'no label', });
lyr_WaterSprings_2.set('fieldLabels', {'ABBOT SPRING': 'no label', });
lyr_GolfCourses_3.set('fieldLabels', {'Name': 'no label', 'Website': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_FloatTripOutfitters_4.set('fieldLabels', {'Name': 'no label', 'Website': 'no label', 'River': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Wineries_5.set('fieldLabels', {'Name': 'no label', 'Website': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_GroceryStores_6.set('fieldLabels', {'Name': 'no label', 'Website': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Restaurants_7.set('fieldLabels', {'Name': 'no label', 'Website': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RestaurantsNames_8.set('fieldLabels', {'Name': 'no label', 'Website': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Q22022_9.set('fieldLabels', {'SALE TYPE': 'no label', 'SOLD DATE': 'no label', 'PROPERTY TYPE': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE OR PROVINCE': 'no label', 'ZIP OR POSTAL CODE': 'no label', 'PRICE': 'no label', 'BEDS': 'no label', 'BATHS': 'no label', 'LOCATION': 'no label', 'SQUARE FEET': 'no label', 'LOT SIZE': 'no label', 'YEAR BUILT': 'no label', 'DAYS ON MARKET': 'no label', '$/SQUARE FEET': 'no label', 'HOA/MONTH': 'no label', 'STATUS': 'no label', 'NEXT OPEN HOUSE START TIME': 'no label', 'NEXT OPEN HOUSE END TIME': 'no label', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'no label', 'SOURCE': 'no label', 'MLS#': 'no label', 'FAVORITE': 'no label', 'INTERESTED': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ListText': 'no label', });
lyr_Q32022_10.set('fieldLabels', {'SALE TYPE': 'no label', 'SOLD DATE': 'no label', 'PROPERTY TYPE': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE OR PROVINCE': 'no label', 'ZIP OR POSTAL CODE': 'no label', 'PRICE': 'no label', 'BEDS': 'no label', 'BATHS': 'no label', 'LOCATION': 'no label', 'SQUARE FEET': 'no label', 'LOT SIZE': 'no label', 'YEAR BUILT': 'no label', 'DAYS ON MARKET': 'no label', '$/SQUARE FEET': 'no label', 'HOA/MONTH': 'no label', 'STATUS': 'no label', 'NEXT OPEN HOUSE START TIME': 'no label', 'NEXT OPEN HOUSE END TIME': 'no label', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'no label', 'SOURCE': 'no label', 'MLS#': 'no label', 'FAVORITE': 'no label', 'INTERESTED': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ListText': 'no label', });
lyr_Q42022_11.set('fieldLabels', {'SALE TYPE': 'no label', 'SOLD DATE': 'no label', 'PROPERTY TYPE': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE OR PROVINCE': 'no label', 'ZIP OR POSTAL CODE': 'no label', 'PRICE': 'no label', 'BEDS': 'no label', 'BATHS': 'no label', 'LOCATION': 'no label', 'SQUARE FEET': 'no label', 'LOT SIZE': 'no label', 'YEAR BUILT': 'no label', 'DAYS ON MARKET': 'no label', '$/SQUARE FEET': 'no label', 'HOA/MONTH': 'no label', 'STATUS': 'no label', 'NEXT OPEN HOUSE START TIME': 'no label', 'NEXT OPEN HOUSE END TIME': 'no label', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'no label', 'SOURCE': 'no label', 'MLS#': 'no label', 'FAVORITE': 'no label', 'INTERESTED': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ListText': 'no label', });
lyr_Q12023_12.set('fieldLabels', {'SALE TYPE': 'no label', 'SOLD DATE': 'no label', 'PROPERTY TYPE': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE OR PROVINCE': 'no label', 'ZIP OR POSTAL CODE': 'no label', 'PRICE': 'no label', 'BEDS': 'no label', 'BATHS': 'no label', 'LOCATION': 'no label', 'SQUARE FEET': 'no label', 'LOT SIZE': 'no label', 'YEAR BUILT': 'no label', 'DAYS ON MARKET': 'no label', '$/SQUARE FEET': 'no label', 'HOA/MONTH': 'no label', 'STATUS': 'no label', 'NEXT OPEN HOUSE START TIME': 'no label', 'NEXT OPEN HOUSE END TIME': 'no label', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'no label', 'SOURCE': 'no label', 'MLS#': 'no label', 'FAVORITE': 'no label', 'INTERESTED': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ListText': 'no label', });
lyr_Q22023_13.set('fieldLabels', {'SALE TYPE': 'no label', 'SOLD DATE': 'no label', 'PROPERTY TYPE': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE OR PROVINCE': 'no label', 'ZIP OR POSTAL CODE': 'no label', 'PRICE': 'no label', 'BEDS': 'no label', 'BATHS': 'no label', 'LOCATION': 'no label', 'SQUARE FEET': 'no label', 'LOT SIZE': 'no label', 'YEAR BUILT': 'no label', 'DAYS ON MARKET': 'no label', '$/SQUARE FEET': 'no label', 'HOA/MONTH': 'no label', 'STATUS': 'no label', 'NEXT OPEN HOUSE START TIME': 'no label', 'NEXT OPEN HOUSE END TIME': 'no label', 'URL (SEE https://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'no label', 'SOURCE': 'no label', 'MLS#': 'no label', 'FAVORITE': 'no label', 'INTERESTED': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ListText': 'no label', });
lyr_KeyLocationsAttractions_14.set('fieldLabels', {'Name': 'inline label', 'Info': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_KeyLocationsAttractions_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});