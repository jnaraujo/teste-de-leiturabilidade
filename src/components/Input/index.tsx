import React, { forwardRef, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return (
    <input className={styles.input} ref={ref} {...rest} />
  );
});

export default Input;