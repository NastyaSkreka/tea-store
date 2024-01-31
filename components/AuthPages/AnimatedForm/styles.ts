import styled from 'styled-components';
import { motion } from "framer-motion";


export const StyledForm = styled(motion.div)`
    position: absolute;
    width: 100%;
    background: red;
    opacity: 1;
    transform: translateY(0%) translateZ(0px);
    height: 450px;
    bottom: 0px;
    z-index: 600;
`