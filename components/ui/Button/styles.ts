import styled from 'styled-components';

export const StyledButton = styled.button`
  position: absolute;
  background-color: ${(props) => (props.color === 'green' ? 'teal' : 'white')};
  color: ${(props) => (props.color === 'green' ? 'white' : 'teal')};
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 223px;
  height: 41px;
  border-radius: 20.5px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
