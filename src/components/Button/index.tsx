import React from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <button className={styles.button} {...rest}>{children}</button>;
}

export default Button;