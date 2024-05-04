import { IoMdClose } from "react-icons/io";
import styled from 'styled-components'


export const  ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const  ModalWindow = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
 
`
export const  CloseModalButton = styled(IoMdClose)`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 12px;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`