import axios from "axios";
import Cookies from "js-cookie";

export default (ctx = null) => {
  let token;
  let baseURL;

  if(ctx && ctx.req){
    const cookie = ctx.req.headers.cookie
    if (token) token = cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    baseURL = process.env.BASE_URL
  }else{
    token = Cookies.get("token");
    baseURL = process.env.NEXT_PUBLIC_BASE_URL
  }

  const request = axios.create({
    baseURL: baseURL,
    headers: { Authorization: `Bearer ${token}` }
  });

  return request;
};