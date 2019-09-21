const LibpostalProxy = require('../proxy/LibpostalProxy');
const ParsedAddress = require('../model/ParsedAddress');
class LibpostalService {
    async parseAddress(address){
        let proxy,
            response;
        try{
            proxy = new LibpostalProxy();
            await proxy.connect();
            response = await proxy.send('parse', address);

            return new ParsedAddress(response);
        }catch(e){
            throw e;
        }finally{
            try{
                proxy.close();
            }catch(e){
                console.log('cannot close socket');
            }

            proxy = null;
            response = null;
        }
    }
}
module.exports = LibpostalService;