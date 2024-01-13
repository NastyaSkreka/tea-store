import React, { useState, useRef, useEffect } from 'react';
import DropdownIcon from '@/public/dropdown-icon'

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
    console.log('Selected Item:', item);
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
    <div className="relative z-[101] mt-3" ref={dropdownRef}>
      <div
        className={`flex ${size} items-center gap-1 rounded border-2 border-teaBlue px-1 py-2`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
        <div className="text-sm font-semibold">{selectedItem || label}</div>
            <div className='ml-auto'>
            <DropdownIcon />
            </div>
        </div>

        <div
          className={`absolute ${isOpen ? 'block' : 'hidden'} ${size} left-0  mt-[150px] rounded border bg-white`}
        >
          <ul>
            {content.map((item, index) => (
              <li
                key={index}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  selectedItem === item ? 'bg-teaGreen text-white' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
