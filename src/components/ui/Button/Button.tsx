import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Show loading spinner */
  loading?: boolean;
  /** Make button full width */
  fullWidth?: boolean;
  /** Icon to display before text */
  icon?: ReactNode;
  /** Button content */
  children: ReactNode;
}

/**
 * Reusable Button Component
 *
 * Supports multiple variants, sizes, loading state, and icons.
 *
 * @example
 * <Button variant="primary" size="md">Click Me</Button>
 * <Button variant="outline" loading>Saving...</Button>
 * <Button variant="danger" icon={<TrashIcon />}>Delete</Button>
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  icon,
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const classNames = [
    'btn-custom',
    `btn-custom--${variant}`,
    `btn-custom--${size}`,
    loading ? 'btn-custom--loading' : '',
    fullWidth ? 'btn-custom--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className="btn-spinner" aria-hidden="true" />}
      {!loading && icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
