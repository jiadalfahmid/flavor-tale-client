import { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthProvider";

const UseAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

export default UseAuth;