const os = require('os');

let responseData = Symbol();
let timings = Symbol();
class Response {
    constructor() {
        let startDate = new Date();
        this[responseData] = {
            host: os.hostname(),
            roundTripTime: null,
            success: true,

            alerts:[],
            message: ''
        };
        this[timings] = {
            startTime : startDate.getTime()
        };
        startDate = null;
    }
    set alerts(alerts){
        this[responseData].alerts = alerts;
    }
    addAlert(alert){
        this[responseData].alerts.push(alert);
    }
    set host(host){
        this[responseData].host = host;
    }
    set userAgent(ua){
        this[responseData] = Object.assign(this[responseData], ua);
    }
    set success(val) {
        this[responseData].success = val;
    }
    set resultSet(val) {
        if(!Array.isArray(val)){
            val = [val];
        }


        this[responseData].resultSet = val;
    }
    set error(error){
        this[responseData].error = error;
    }
    get error(){
        return this[responseData].error;
    }
    set message(val) {
        this[responseData].message = val;
    }
    get message(){
        return this[responseData].message;
    }
    get success() {
        return this[responseData].success;
    }
    get resultSet() {
        return this[responseData].resultSet;
    }
    get ipAddress(){
        return this[responseData].ipAddress;
    }
    toJSON() {
        let stopDate = new Date();
        let stopTime = stopDate.getTime();

        this[responseData].roundTripTime = stopTime - this[timings].startTime + ' ms';
        stopDate = null;
        stopTime = null;

        return {
            host: this[responseData].host,
            resultSet: this[responseData].resultSet,
            roundTripTime: this[responseData].roundTripTime,
            success: this[responseData].success,
            error: this[responseData].error,
            alerts:this[responseData].alerts,
            message: this[responseData].message
        }
    }

}

module.exports = Response;