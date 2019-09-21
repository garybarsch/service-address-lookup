module.exports = (err, req, res, next) => {
    let serializedError;

    try {
        if(typeof err.toJSON === 'function'){
            serializedError = Object.assign({},{name: err.name, message: err.message, stack: err.stack});
        } else{
            serializedError = {name: err.name, message: err.message, stack: err.stack};
        }
        return res.json(serializedError);
    }catch(e){
        console.error(e);
    }finally{
        serializedError = null;
    }
};