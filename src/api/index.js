import axios from 'axios';
import * as URL from './url';

export default function API(endpoint, method, body, token) {
    return axios({
        url: `${URL.API_ELEARNING}/${endpoint}`,
        method: method,
        data: body,
        headers: { "Authorization": `Bearer ${token}` }
    })
}