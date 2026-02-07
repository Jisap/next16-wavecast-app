"use client"

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'btn1' | 'btn2';
  icon?: React.ReactNode;
  // Colores personalizables (con valores por defecto)
  primaryColor?: string;
  secondColor?: string;
  whiteColor?: string;
  blackColor?: string;
}

const AgnosticButton = ({
  children,
  variant = 'btn1',
  className = '',
  icon,
  primaryColor = '#3b82f6', // azul por defecto
  secondColor = '#8b5cf6',  // púrpura por defecto
  whiteColor = '#ffffff',
  blackColor = '#000000',
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseStyles = "relative z-10 overflow-hidden rounded-[50px] border font-semibold cursor-pointer transition-all duration-500 ease-in-out flex items-center gap-2 px-4 py-2 text-sm md:gap-4 md:px-6 md:py-3 md:text-base";

  const variant1Styles = isHovered
    ? `text-[${whiteColor}] border-[${whiteColor}]`
    : `text-[${primaryColor}] border-[${primaryColor}]`;

  const variant2Styles = isHovered
    ? `text-[${whiteColor}] border-[${whiteColor}]`
    : `text-[${blackColor}] border-[${primaryColor}]`;

  return (
    <button
      className={`${baseStyles} ${variant === 'btn1' ? '' : ''} ${className}`}
      style={{
        color: variant === 'btn1'
          ? (isHovered ? whiteColor : primaryColor)
          : (isHovered ? whiteColor : blackColor),
        borderColor: isHovered ? whiteColor : primaryColor,
        backgroundColor: variant === 'btn2' ? primaryColor : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Efecto de fondo animado */}
      <span
        className="absolute rounded-[50px] transition-all duration-500 ease-in-out -z-10"
        style={{
          backgroundColor: secondColor,
          ...(variant === 'btn1' ? {
            bottom: isHovered ? 0 : 'auto',
            right: isHovered ? 'auto' : 0,
            left: isHovered ? 0 : 'auto',
            top: isHovered ? 0 : 'auto',
            width: isHovered ? '100%' : '0',
            height: isHovered ? '100%' : '0',
          } : {
            top: isHovered ? 'auto' : 0,
            left: isHovered ? 'auto' : 0,
            bottom: isHovered ? 0 : 'auto',
            right: isHovered ? 0 : 'auto',
            width: isHovered ? '100%' : '0',
            height: isHovered ? '100%' : '0',
          })
        }}
      />

      {children}

      {/* Ícono opcional */}
      {icon && (
        <span
          className="rounded-full w-[30px] h-[30px] font-bold flex items-center justify-center transition-transform duration-500 ease-in-out"
          style={{
            backgroundColor: variant === 'btn2' ? blackColor : primaryColor,
            color: variant === 'btn2' ? primaryColor : blackColor,
            transform: isHovered ? 'rotate(-180deg)' : 'rotate(0deg)',
          }}
        >
          {icon}
        </span>
      )}
    </button>
  );
};

export default AgnosticButton;