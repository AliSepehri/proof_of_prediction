import { useFormState } from "react-use-form-state";
import request from "../utils/request";
import Cookies from "js-cookie";

const handleLogin = async ({ values }) => {
  const res = await request().post("/sessions", {
    ...values
  });
  const token = res.data.token;
  
  Cookies.set("token", token);
};

const Login = () => {
  const [formState, { email }] = useFormState();

  return (
    <div>
      <label for="email">Email: </label>
      <input {...email("email")} require />

      <button onClick={() => handleLogin(formState)}>Login</button>
    </div>
  );
}

export default Login;
