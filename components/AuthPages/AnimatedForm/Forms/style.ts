import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 5px 25px;
    display: flex;
    flex-direction: column;
`;

export const  FieldContainer = styled.div`
    margin: 10px 0;
`

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid black; 
    margin-bottom: 2px;
    padding: 5px;
    outline: none;
    width: 100%;
`;


export const ContinueContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
`;

export const Line = styled.div`
    flex-grow: 1;
    height: 1px;
    background-color: black;
`;

export const ContinueText = styled.div`
    margin: 0 10px;
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 14px;
    margin: 0;
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px ;
    gap: 30px;
`

export const FormLabel = styled.div`
    font-size: 14px;
    font-weight: 400;
`

export const FormLink = styled.div`
    cursor: pointer;
    margin: 15px 0;
`