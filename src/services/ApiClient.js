import axios from 'axios';
import {BACKEND_API_URL} from 'react-native-dotenv'

class ApiClient {

    constructor(){
        this.httpClient = axios.create({
            baseURL: BACKEND_API_URL
        });
    }

    login(email, password) {
        axios.post('/api/v1/')
    }

}