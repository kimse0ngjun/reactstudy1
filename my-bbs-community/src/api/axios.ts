// 통신 url 구성
import axios from "axios";

const instance = axios.create({ baseURL: "/api", withCredentials: true });

export default instance;
