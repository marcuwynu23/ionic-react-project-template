import axios from "axios";

// set default base url
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// set default headers
axios.defaults.headers.post["Content-Type"] = "application/json";

export default axios;
