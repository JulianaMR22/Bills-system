import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SignIn from "../login/SignIn";
import SignUp from "../login/SignUp";
import ForgotPassword from "../login/ForgotPassword";
import "../../style/Login.css";

function Login() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="login">
      <div className="container_login">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="sign in" />
            <Tab label="sign up" />
            <Tab label="forgot password?" />
          </Tabs>
          {value === 0 && <SignIn />}
          {value === 1 && <SignUp />}
          {value === 2 && <ForgotPassword />}
        </Box>
      </div>
    </div>
  );
}

export default Login;
