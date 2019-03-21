import axios from 'axios'

// Take data from json file
const mockData = require('../../offer.json')

// Start: mocking API
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

mock.onGet('/offers').reply(200, mockData)
// END: mocking API

function getAll () {
    return axios({
        url: '/offers',
        method: 'GET'
    })
        .then(({ data }) => data)
        .catch(error => console.error('Offer service error: GetAll ', error))
}

export default {
    getAll
}

