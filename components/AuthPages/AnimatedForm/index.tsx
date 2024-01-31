import React from "react";
import {StyledForm } from './styles'


interface IProps {
    isOpen: boolean;
  }

const AnimatedForm = ({ isOpen }: IProps) => {
 
  return (
    <StyledForm
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "100%" }}
      transition={{ duration: 0.3 }}
    >
      <form>
       Form Content
      </form>
    </StyledForm>
  );
};

export default AnimatedForm;
