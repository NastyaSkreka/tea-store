import React from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

const LoaderContainer = styled.div`
  position: absolute;
  min-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export default function Loader() {
  return (
    <LoaderContainer>
         <ClipLoader 
        color={"var(--primary-color)"} 
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoaderContainer>
  );
};

