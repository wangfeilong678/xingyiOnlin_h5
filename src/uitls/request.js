import axios from 'axios'
import {Toast} from "vant";

const baseUrl = 'http://39.99.138.150:8083/famous';

export default function ({url, data, method = 'post'}) {
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    })
    return new Promise(resolve => {
        axios({
            url: baseUrl + url,
            method,
            data
        }).then(data => {
            if (data.status === 200) {
                Toast.clear();
                resolve(data.data);
            }
            resolve(data);
        }).catch(error => {
            console.log(error);
        })
    })
}

