import styled from 'styled-components';
import { motion } from "framer-motion";


export const StyledForm = styled(motion.div)`
    position: absolute;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px; 
    width: 100%;
    background: #FAF8F8;
    opacity: 1;
    transform: translateY(0%) translateZ(0px);
    height: 450px;
    bottom: 0px;
    z-index: 600;
`
export const FormSwitcher = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5px 0 ;
`;

export const SwitchButton = styled.button<{ isActive: boolean }>`
    cursor: pointer;
    font-size: 18px;
    font-weight: ${({ isActive }) => (isActive ? "600" : "normal")};

`;
export const Spacer = styled.div`
    width: 4px;
    height: 40px;
    background-color: #CFCFCF;
`;