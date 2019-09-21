const LibpostalService = require('./src/service/LibpostalService');

const doIt = async(address)=>{
    let service,
        addy;
    try{
        service = new LibpostalService();
        addy = await service.parseAddress(address);
        return addy;
    }catch(e){
        throw e;
    }finally{
        service = null;
        addy = null;
    }
}

doIt('131 Buttercup Street Kyle, Tx 78640').then(r=> console.log(r)).catch(e=> console.error(e))

