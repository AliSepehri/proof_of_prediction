import axios from "axios";
import Cookies from "js-cookie";

export default (ctx = null) => {
  let token;

  if(ctx && ctx.req){
    const cookie = ctx.req.headers.cookie
    token = cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }else{
    token = Cookies.get("token");
  }

  const request = axios.create({
    baseURL: "http://localhost:4000",
    headers: { Authorization: `Bearer ${token}` }
  });

  return request;
};