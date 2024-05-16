import styled from 'styled-components';
import Link from 'next/link';
import { PiUserCircleThin } from 'react-icons/pi'
import { IoMdExit } from "react-icons/io";
import { IoEnterOutline } from "react-icons/io5";

export const UserMenu = styled.div<{isOpen: boolean}>`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--textSecondary-color);
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const ExidIcon = styled(IoMdExit)`
    font-size: 24px;
    color: var(--primary-color);
`
export const EnterIcon = styled(IoEnterOutline)`
    font-size: 24px;
    color: var(--primary-color);
`

export const UserText = styled.div`
    font-size: 18px;
    color: var(--primary-color);
`
export const UserMenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const StyledNavLink = styled(Link)<{isActive: boolean}>`
 margin: 0px 15px;
 text-decoration: ${props => props.isActive ? 'underline' : ''};
`;

export const HeaderContainer = styled.header`
position: relative;
  background-color: var(--primary-color);
  color: var(--textSecondary-color);
  max-height: 100px;
  padding: 10px;
  border-radius: 5px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const NavContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const IconsWrapper = styled.div`
    font-size: 28px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 15px;
`

export const UserIcon = styled(PiUserCircleThin)`

`
export const IconContainer = styled.div`
    width: 28px;
    height: 28px;

`