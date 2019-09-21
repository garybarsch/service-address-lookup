const addressValidateResponseTemplate = {
    success: 'boolean(count(//Address/Error) = 0)',
    error: [
        '//Address/Error',
        {
            number:'./Number',
            source:'./Source',
            description:'./Description'
        }
    ],
    response: [
        '//Address',
        {
            address1: './Address2',
            address2: './Address1',
            city:'./City',
            postalCode:'./Zip5'
        }
    ]
}
module.exports = addressValidateResponseTemplate;