import React, { forwardRef, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return (
    <Container>
      <input ref={ref} {...rest} />
    </Container>
  );
});

export default Input;