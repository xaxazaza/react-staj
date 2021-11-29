import axios from "axios";

export default axios.create({
  baseURL: "localhost:8080/Netas_staj/webresources/",
  mode: 'no-cors',
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json"
  }
});
