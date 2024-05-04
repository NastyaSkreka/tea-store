"use client"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import {
    FooterContainer,
    FooterWrapper,
    ActionsContainer,
    NavContainer,
    NavLink,
} from './styles';


// TODO: получить категории

export default function Footer() {
  

  return (
    <FooterContainer>
      <FooterWrapper>
        <NavContainer>
          <NavLink>
            <a href="#">Home</a>
          </NavLink>
          <NavLink>
            <a href="#">About</a>
          </NavLink>
          <NavLink>
            <a href="#">Contact</a>
          </NavLink>
          <NavLink>
            <a href="#">Home</a>
          </NavLink>
          <NavLink>
            <a href="#">About</a>
          </NavLink>
          <NavLink>
            <a href="#">Contact</a>
          </NavLink>
        </NavContainer>
       
        <ActionsContainer>
            <FaInstagram />
            <CiFacebook />
            <FaWhatsapp />
        </ActionsContainer>
      </FooterWrapper>
    </FooterContainer>
  );
}