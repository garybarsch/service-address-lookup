const builder = require('xmlbuilder');
class AddressValidateRequest {
    request = {
        AddressValidateRequest: {
            '@USERID': process.env.USPS_API_USER,
            Address: {
                Address1: '',
                Address2: '',
                City: '',
                State: '',
                Zip5: '',
                Zip4: ''
            }
        }
    }
    constructor(data){
        this.request.AddressValidateRequest.Address.Address1 = data.address2 || '';
        this.request.AddressValidateRequest.Address.Address2 = data.address1 || '';
        this.request.AddressValidateRequest.Address.Zip5 = data.postalCode || '';
        this.request.AddressValidateRequest.Address.City = data.city || '';
        this.request.AddressValidateRequest.Address.State = data.state || '';
    }
    toXML(){
        //console.log(this.request);
        return builder.begin().ele(this.request).end({pretty: false, headless: true});
    }

}
module.exports = AddressValidateRequest;