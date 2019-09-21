const UspsProxy = require('../proxy/UspsProxy');
const Request = require('../model/AddressValidateRequest');
const Response = require('../model/AddressValidateResponse');
class UspsService {
    async validateAddress(address){
        let proxy,
            request,
            responseData,
            response;
        try{
            proxy = new UspsProxy();
            request = new Request(address);

            responseData = await proxy.get(request);
            response = new Response(responseData);
            return response;
        }catch(e){
            throw e;
        }finally{
            proxy = null;
            request = null;
            responseData = null;
            response = null;
        }
    }
}
module.exports = UspsService;