import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header>
      <div className="mt-[23px]">{children}</div>
    </header>
  );
}
