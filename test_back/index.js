const xpress = require('express');
const http = require('http');
const objectToArray = require('./providers/utils').objectToArray;

//Some static data
const PORT = 2601;
const cities = require('./cities.json');

//providers
const PV_GIS = require('./providers/PV_GIS/PV_GIS_adapter');

//Create API server
const _api = xpress();
const _server = http.createServer(_api);

//Start the server API gateway
_server.listen(2601, console.log(`ℹ️ API server is now running on ${PORT}`));


/**
 * Convenient method that create and send the response over the network 
 * 
 * @param {Number}          code   HTTP status to return
 * @param {HTTP Response}   res    HTTP response use to send back result 
 * @param {Object}          data   The object to return 
 */
const _craftResponse = (code, res, data) => {
    res.writeHead(code, {'content-type' : 'application/json'});
    res.write(JSON.stringify(data));
    res.send();
}

// ============[ PROVIDERS ]============

//Test it the this provider is avaible
//If so create a dedicated route
PV_GIS.ping()
    .then(() =>{ 
        console.log('✅ PV_GIS provider is available');
        _api.get('/api/pvgis/:city/PV_PERF', __process_PVGIS_pvperf_request)
    })
    .catch(err =>{
        console.log('❌ PV_GIS provider is NOT available');
        console.log(err);
});

/**
 * Handler for the `/api/pvgis/:city/PV_PERF` route 
 */
const __process_PVGIS_pvperf_request = (req, res)=>{
    const cityCoord =cities[req.params.city.toUpperCase()];
    if(cityCoord){
        PV_GIS.fetchPVCalc(objectToArray({...cities[req.params.city.toUpperCase()], ...req.query}))
        .then(data => _craftResponse(200, res, data))
        .catch(err => _craftResponse(500, res, {error:err}))
    } 
    else{
        _craftResponse(422, res, {error:'UNKNOWN CITY'});
    }
} 

