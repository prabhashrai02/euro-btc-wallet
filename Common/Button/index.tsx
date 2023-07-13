import React, { MouseEventHandler } from 'react';

import styles from './button.module.css';

const Button = ({ className, onClick, children }: ButtonProps) => {

    const style = className ?? '';

  return (
    <button className={`${styles.button} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};


type ButtonProps = {
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export default Button;
