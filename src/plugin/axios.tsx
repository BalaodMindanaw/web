import axios from "axios";

 

axios.defaults.baseURL = "https://balaodmindanaw.up.railway.app/"
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios