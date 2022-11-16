import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://uigguiui.herokuapp.com/'
})

export default instance