import React from 'react';

interface IProps  {
  children: React.ReactNode;
}

export default function Header({ children }:IProps) {
  return (
    <header>
      <div className="mt-[23px]">{children}</div>
    </header>
  );
}
