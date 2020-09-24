import React from "react";
import { AuthContext } from "../App";

export const Header = () => {
  const { state: authState } = React.useContext(AuthContext);
  const { dispatch } = React.useContext(AuthContext);
  const handleLogout = event => {
      dispatch({
        type: "LOGOUT",
        payload: null
      })
	  };
  return (
    <nav id="navigation">
      <h1 href="#" className="logo">
        HOOKED
      </h1>
      { authState.isAuthenticated ? ( <h2><a className="mr-30" href="#" onClick={handleLogout}>Logout</a> </h2>):
        (<h2><a className="mr-30" href="">Login</a></h2>)
      }
    </nav>
  );
};
export default Header;