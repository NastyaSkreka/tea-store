import React, { useState } from "react";
import {StyledForm, FormSwitcher, SwitchButton, Spacer} from './styles'

import SignUp from "./Forms/SignUp";
import LoginForm from "./Forms/LogIn";

interface IProps {
    isOpen: boolean;
  }

const AnimatedForm = ({ isOpen }: IProps) => {
    const [activeForm, setActiveForm] = useState("login");

  const handleSwitchForm = (formType: string) => {
    setActiveForm(formType);
  };
 
  return (
    <StyledForm
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "100%" }}
      transition={{ duration: 0.3 }}
    >
    <FormSwitcher>
        <SwitchButton
          onClick={() => handleSwitchForm("login")}
          isActive={activeForm === "login"} 
        >
          Login
        </SwitchButton>
        <Spacer/>
        <SwitchButton
          onClick={() => handleSwitchForm("signup")}
          isActive={activeForm === "signup"} 
        >
          Signup
        </SwitchButton>
      </FormSwitcher>
      {activeForm === "login" ? <LoginForm/> : <SignUp/>}
    </StyledForm>
  );
};

export default AnimatedForm;
