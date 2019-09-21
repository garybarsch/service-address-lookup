const axios = require('axios');
class UspsProxy {
    async get(request) {
        return axios.get(process.env.USPS_API_URI.concat(request.toXML()), {
            headers: {
                'Content-Type': 'text/xml'
            }
        }).then(r=>r.data)
    }
}

module.exports = UspsProxy;