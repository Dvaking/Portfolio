import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: '#2B282B',
        color: '#ededed',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}>
      {children}
    </div>
  );
}
