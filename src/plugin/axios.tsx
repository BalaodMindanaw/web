import axios from "axios";

 

axios.defaults.baseURL = "https://balaod.mindanao.06222001.xyz/"
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios