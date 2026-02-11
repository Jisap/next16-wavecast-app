import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'btn1' | 'btn2';
}

const Button = ({ children, variant = 'btn1', className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`btn ${variant} flex items-center justify-center gap-2 px-4 py-2 text-sm md:gap-4 md:px-6 md:py-3 md:text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
