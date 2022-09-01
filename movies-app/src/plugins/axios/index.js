import axios from "axios";
import interseptor from "./interseptor";
const instance = axios.create({
  baseURL: process.env.VUE_APP_URL_MOVE,
});

interseptor(instance);
export default instance;
