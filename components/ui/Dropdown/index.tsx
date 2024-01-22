'use client';

import React, { useState, useRef, useEffect } from 'react';
import DropdownIcon from '@/public/dropdown-icon'
import {
    DropdownContainer,
    DropdownButton,
    DropdownList,
    DropdownItem, 
    DropdownText
} from './styles'


interface IDropdownProps {
    content: string[];
    size?: string;
    label?: string;
  }

const Dropdown = ({ content, size = '', label = '' }: IDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item: string) => {
      setSelectedItem(item);
      setIsOpen(false);
    };
  
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

    return (
        <DropdownContainer ref={dropdownRef}>
            <DropdownButton
                onClick={toggleDropdown}
            >
            <DropdownText>{selectedItem || label}</DropdownText>
            <DropdownIcon />
            </DropdownButton>

           <DropdownList isOpen={isOpen} width={size}>
            <ul>
            {content.map((item, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </DropdownItem>
            ))}
            </ul>
          </DropdownList>
        </DropdownContainer>
    )
  }

export default Dropdown;