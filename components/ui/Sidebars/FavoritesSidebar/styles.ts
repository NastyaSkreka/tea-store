import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoIosClose } from "react-icons/io";

export const FavouritesSidebarWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0; 
    width: 35%;
    background-color: var(--primary-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    z-index: 100;
`
export const FavoritesItemsContainer = styled.div`
    margin-top: 15px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;

`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 99; 
    opacity: 0; 
    transition: opacity 0.3s ease;
`

export const CloseIcon = styled(IoIosClose)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
`