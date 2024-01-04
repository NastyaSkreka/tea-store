import React from 'react'

type HeaderProps = {
    children: React.ReactNode;
}

export default function Header({children}:HeaderProps  ) {
    return (
      <h2>{children}</h2>
    )
  }
