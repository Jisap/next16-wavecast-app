"use client"

import React from 'react';
import Button from '../Button/AgnosticButton';



interface InputPillProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonVariant?: 'btn1' | 'btn2';
  onButtonClick?: () => void;
  containerClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  // Colores personalizables
  primaryColor?: string;
  secondColor?: string;
  whiteColor?: string;
  blackColor?: string;
}

const InputPill = ({
  buttonText = 'Enviar',
  buttonIcon,
  buttonVariant = 'btn2',
  onButtonClick,
  containerClassName = '',
  inputClassName = '',
  buttonClassName = '',
  primaryColor = '#3b82f6',
  secondColor,
  whiteColor = "#fff",
  blackColor = "#000",
  ...inputProps
}: InputPillProps) => {

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div
      className={`
        w-full 
        flex items-center 
        border border-gray-300 
        rounded-full 
        overflow-hidden
        transition-all duration-300
        focus-within:border-(--pill-primary)
        focus-within:ring-2 focus-within:ring-(--pill-primary)/20
        p-1.5 sm:p-2
        ${containerClassName}
      `}
      style={{
        borderColor: inputProps.disabled ? '#d1d5db' : undefined,
        '--pill-primary': primaryColor,
      } as React.CSSProperties}
    >
      {/* Input Container */}
      <div className="flex-1 relative">
        <input
          {...inputProps}
          className={`
            w-full 
            px-4 py-2 sm:px-5 sm:py-2.5
            text-sm sm:text-base
            border-0
            outline-none
            rounded-full
            ${inputClassName}
          `}
        />
      </div>

      {/* Button with padding */}
      <div className="flex-shrink-0">
        <Button
          variant={buttonVariant}
          icon={buttonIcon}
          onClick={handleButtonClick}
          className={`
            whitespace-nowrap
            text-xs sm:text-sm
            px-4 py-2 sm:px-5 sm:py-2.5
            ${buttonClassName}
          `}
          primaryColor={primaryColor}
          secondColor={secondColor}
          whiteColor={whiteColor}
          blackColor={blackColor}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default InputPill;