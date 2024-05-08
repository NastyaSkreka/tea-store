"use client"
import { ReactNode } from "react";
import MainLayout from "./mainLayout";
import Header from '@/components/Header';
import { Container } from "@/lib/globals";
import Footer from "../../Footer";

interface IProps {
  children: ReactNode;
 
}

export default function PageLayout({ children }: IProps) {
  return (
    <MainLayout>
        <Container>
            <Header/>
            {children}
            <Footer/>
        </Container>
    </MainLayout>
  );
}
