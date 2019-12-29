var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios, { delayResponse: 1000 });

var store = {
    id: '8Vw3bgbMMzeYfrQHQ8p3Jr',
    logoURl: 'http://localhost:5000/kamereo-png.png',
    name: 'KAMEREO',
    address: '40 Nguyen Cuu Van',
    district: 'Dictrict Binh Thanh',
    city: 'Ho Chi Minh',
    phone: '0839443000',
    redInvoice: {
        name: 'K.O.I Thé International Company',
        address: '235 Nguyen Van Cu',
        district: 'Dictrict 1',
        city: 'Ho Chi Minh',
        taxCode: 'P77744944',
    }
}

mock.onGet('/information').reply(200, {
    store
});

mock.onPost('/information').reply(200, (config) => {
    store = JSON.parse(config.data);
    return store;
});

class MockService {
    getInformation() {
        return axios.get('/information');
    }

    postInformation(data){
        return axios.post('/information', data); 
    }
}

export default new MockService();