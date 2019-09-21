const {Client} = require('zerorpc');
class LibpostalProxy {
    constructor(){
        this.client = new Client();
    }
    close(){
        return this.client.close();
    }
    connect(){
        return new Promise((resolve, reject)=>{

            this.client.once('error', (e)=> reject(e));
            this.client.connect(`tcp://0.0.0.0:4242`);
            resolve();

        })
    }
    async send(command, arg){
        return new Promise((resolve, reject)=>{
            let data = [];
            this.client.invoke(command, arg, (error, res, more)=>{

                if(error) {

                    reject(error)
                }
                if(!more) {
                    resolve(res);
                }
            })
        })
    }
}
module.exports = LibpostalProxy;