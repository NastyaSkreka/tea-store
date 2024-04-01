import styled from 'styled-components';

export const FavHeartContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 0px;
  border-radius: 50%;
  border: 2px solid var(--textSecondary-color);
  background-color:var(--backgroundGrayLight-color);
  padding: 2px; 

  svg {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

