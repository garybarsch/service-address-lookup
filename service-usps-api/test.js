const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const AddressValidateRequest = require('./src/model/AddressValidateRequest');
const AddressValidateResponse = require('./src/model/AddressValidateResponse')
const obj = {
    address1:"6350 meadowvista drive",
    city:"",
    state:"TX",
    postalCode: '78414'
}
let request = new AddressValidateRequest(obj);
axios.get(process.env.USPS_API_URI.concat(request.toXML()), {
    headers:{
        'Content-Type':'text/xml'
    }
}).then(r=>console.log(new AddressValidateResponse(r.data)))

