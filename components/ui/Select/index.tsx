'use client';
import { useState } from 'react';
import { ISelect } from '../../../lib/types/select.interface';
import {
  SelectButton,
  SelectList,
  SelectListItem,
  ArrowDown,
  SelectContainer,
} from './styles';

export default function SelectComponent<K>({
  data,
  onChange,
  value,
  title,
}: ISelect<K>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContainer>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        {title && <b>{title}:</b>}
        {value?.label || 'Default'}
        <ArrowDown />
      </SelectButton>
      {isOpen && (
        <SelectList>
          {data.map((item) => (
            <SelectListItem
              key={item.key?.toString()}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
            >
              {item.label}
            </SelectListItem>
          ))}
        </SelectList>
      )}
    </SelectContainer>
  );
}
