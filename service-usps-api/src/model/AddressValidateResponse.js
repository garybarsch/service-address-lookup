const translate = require('camaro');
const addressValidateResponseTemplate = require('../template/addressValidateResponseTemplate');
class AddressValidateResponse {
    constructor(data){
        let translatedResponse = translate(data, addressValidateResponseTemplate);
        if(!translatedResponse.success){
            this.success = false;
            this.error = translatedResponse.error[0];
            this.resultSet = [];
        }else{
            this.success = true;
            this.error = {};
            this.resultSet = translatedResponse.response
        }

    }
}
module.exports = AddressValidateResponse;