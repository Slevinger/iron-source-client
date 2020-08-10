import axios from "axios";
//https://ironsource-server.herokuapp.com/
export default axios.create({
  baseURL: "https://ironsource-server.herokuapp.com/v1/surprise",
});
