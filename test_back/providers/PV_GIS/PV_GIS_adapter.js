/**
 * Simple connector to the PHOTOVOLTAIC GEOGRAPHICAL INFORMATION SYSTEM webservice
 * http://re.jrc.ec.europa.eu/pvg_static/web_service.html
 */
const fetch = require("node-fetch");
const filter = require("lodash/filter");
const find = require('lodash/find');

const csvParser = require("../utils").csvParser;


const PV_GIS_CONSTANTS = require('./PV_GIS_constants.json');



 class PV_GIS {

    /**
     * Check if all required parameters are in the provider list
     */
    hasRequiredFields(required, params){
        return required.every(entry => find(params, param =>  Object.keys(param)[0] == entry.name) !== undefined );
    }

    /**
     * Create a query string of params
     */
    buildArgString(args){
        return args.map(argObj => `${Object.keys(argObj)[0]}=${argObj[Object.keys(argObj)[0]]}`).join('&');
    }

    /**
     * Check if the provider is reachable
     */
    ping(){
        return new Promise((res, rej) => {
            fetch(PV_GIS_CONSTANTS.ENDPOINT_BASE, {
                method : 'HEAD'
            })
            .then(resp => {
                resp.status == 200 ? res() : rej('bad response '+resp.status);
            })
            .catch(err => {
                rej(err);
            })
        })
    }

    /**
     * Request a HTTP call to the Estimation service
     * 
     * @param {Array} args List of paramters to transfer to the webservice
     */
    fetchPVCalc(args){
        const req = filter(PV_GIS_CONSTANTS.ENDPOINT_METHODS.PV_PERF_ESTIMATE.params, {'required':true});
        return new Promise((res,rej) => {
            if(Array.isArray(args)){
                if(this.hasRequiredFields(req, args)){ //TODO Also check if args only contains allowed parameters + check default value
                    fetch(PV_GIS_CONSTANTS.ENDPOINT_BASE+PV_GIS_CONSTANTS.ENDPOINT_API+PV_GIS_CONSTANTS.ENDPOINT_METHODS.PV_PERF_ESTIMATE.name+'?'+this.buildArgString(args))
                    .then(resp => {
                        if(resp.status === 200){
                            return resp.text()
                        }
                        else{
                            rej("Webservice returned status "+resp.status);
                        }
                    })
                    .then(data => res(csvParser(data)))
                    .catch(err => rej("Error while fetching the data"))
                }
                else rej("Missing required fields for this webservice");
            }
            else{
                rej("Wrong args format");
            }
        })
    }


 }

 module.exports = new PV_GIS();
