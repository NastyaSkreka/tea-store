"use client"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import {
    FooterContainer,
    FooterWrapper,
    ActionsContainer,
    FooterText,
    FooterInfoColumn
} from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterInfoColumn>
        <FooterText>
        Find us on social networks
        </FooterText>
        <ActionsContainer>
            <FaInstagram />
            <CiFacebook />
            <FaWhatsapp />
        </ActionsContainer>
        </FooterInfoColumn>
        <FooterInfoColumn>
        <FooterText>Created by </FooterText>
        <FooterText>2024</FooterText>
        </FooterInfoColumn>
      </FooterWrapper>
    </FooterContainer>
  );
}