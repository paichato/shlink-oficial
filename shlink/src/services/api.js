import axios from 'axios'

// key 1cdf87971d66e89c00c3dc19036063e1c50763ff
export const key='1cdf87971d66e89c00c3dc19036063e1c50763ff';

const api=axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`,
        'Content-Type':'application/json'
    }
})

export default api;