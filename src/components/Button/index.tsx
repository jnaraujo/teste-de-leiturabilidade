import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return <button className={cx(
    styles.button,
    className
  )} {...rest}>{children}</button>;
}

export default Button;