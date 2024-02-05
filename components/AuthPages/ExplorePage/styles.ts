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
