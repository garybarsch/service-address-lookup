class ParsedAddress {
    house = '';
    category = '';
    near = '';
    house_number = '';
    road = '';
    unit = '';
    level = '';
    staircase = '';
    entrance = '';
    po_box = '';
    postcode = '';
    suburb = '';
    city_district = '';
    city = '';
    island = '';
    state_district = '';
    state = '';
    country_region = '';
    country = '';
    world_region = '';
    constructor(data){
        Object.assign(this, data.reduce((arr, item)=>{
            arr[item.component] = item.value;
            return arr;
        }, {}));
    }
}
module.exports = ParsedAddress;
