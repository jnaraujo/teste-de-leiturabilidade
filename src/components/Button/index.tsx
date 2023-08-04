import React from 'react';
import cx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  asChild,
  ...rest
}) => {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={cx(
    styles.button,
    className
  )} {...rest}>{children}</Comp>;
}

export default Button;