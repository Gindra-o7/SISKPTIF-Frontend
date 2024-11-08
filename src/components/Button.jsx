import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  ...props
}) => {
  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary:
      'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    danger:
      'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    'cancel':
      'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300'
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        variantStyles[variant]
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;