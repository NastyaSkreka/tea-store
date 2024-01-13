import React, { useState } from 'react';
import DropdownIcon from '@/public/dropdown-icon';

export default function Dropdown({ content, size, label }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(' toggleDropdown ');
  };

  return (
    <div className="relative z-[101] mt-3">
      <div
        className={`flex ${size} items-center gap-1 rounded border-2 border-teaBlue px-1 py-2`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-1">
          <div className="text-sm font-semibold">{label}</div>
          <DropdownIcon />
        </div>

        <div
          className={`absolute  ${
            isOpen ? 'block' : 'hidden'
          } ${size} left-0 mt-[150px] rounded border bg-white`}
        >
          <ul>
            {content.map((item, index) => (
              <li key={index} className="px-4 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
