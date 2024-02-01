import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black; 
  margin-bottom: 20px;
  padding: 5px;
  outline: none;
`;

export const LogInButton = styled.button`
    background-color: ${(props) => (props.color === 'green' ? 'teal' : 'white')};
    color: ${(props) => (props.color === 'green' ? 'white' : 'teal')};
    width: 223px;
    height: 41px;
    margin: 20px auto;
    border-radius: 20px;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: black;
`;

export const Text = styled.div`
  margin: 0 10px;
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px ;
    gap: 30px;
`