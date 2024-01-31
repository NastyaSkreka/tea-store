import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled(motion.div)`
  font-size: 50px;
  color: white;
  margin-bottom: 5px;
  text-align: center;
`;

export const Description = styled(motion.p)<{ isVisible: boolean }>`
  color: white;
  width: 215px;
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const ExploreButton = styled(motion.button)`
    position: absolute;
    bottom: 30px;
    background-color: ${(props) => (props.color === 'green' ? 'teal' : 'white')};
    color: ${(props) => (props.color === 'green' ? 'white' : 'teal')};
    width: 223px;
    height: 41px;
    border-radius: 20.5px;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 500;
`