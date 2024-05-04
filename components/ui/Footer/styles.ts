import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1200px;
  background-color: var(--primary-color);
  color: var(--textSecondary-color);
  max-height: 100px;
  padding: 10px;
  border-radius: 5px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  font-size: 28px;
  cursor: pointer;
  gap: 15px;
  margin: 10px 20px 0 20px;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLink = styled.div`
  margin: 0px 20px;
`;
