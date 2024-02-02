"use client"

import { motion } from "framer-motion";
import {Container, Title, Description} from './styles'
import { useState } from 'react';
import AnimatedForm from '@/components/AuthPages/AnimatedForm';
import { ExploreButton} from './styles'

export default function Explore() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    return (
      <Container>
        <motion.div  
           initial={{ y: 0 }}
           animate={{ y: isOpen ? -180 : 0 }}
           transition={{ duration: 0.3 }}
           onClick={toggleForm}
        >
        <Title>CHAI</Title>
        <Description isVisible={!isOpen}>A Cup of tea changes bitter to better</Description>
        </motion.div>

        <AnimatedForm isOpen={isOpen} />
      
        <ExploreButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleForm}
        >
            Explore
        </ExploreButton>
      </Container>
    )
}