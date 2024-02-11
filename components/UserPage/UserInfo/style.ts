import styled from "styled-components";
import Image from 'next/image';

export const FormContainer = styled.div`
    padding: 5px 25px;
    display: flex;
    flex-direction: column;
`;

export const FieldContainer = styled.div`
    margin: 10px 0;
`
export const UserImage = styled(Image)`
    width: 100%;
    object-fit: contain;
    margin-bottom: 50px;
`
 
export const TextFiled = styled.div`
    border-bottom: 1px solid black; 
    margin-bottom: 2px;
    padding: 5px;
    outline: none;
    width: 100%;
`;

export const StyledButton = styled.button`
    margin: 10px 0;
    background-color: ${props => props.color || '#00575F'}; 
    color: #fff;
    width: 100%;
    height: 30px;
    border-radius: 12.5px;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Actions = styled.div`
   margin-top: 50px;
`