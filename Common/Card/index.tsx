import React, { ReactNode } from "react";

import styles from './card.module.css';

const Card = ({ className, children }: CardProps) => {

    const style = className ?? '';

  return (
    <div className={`${styles.card} ${style}`}>
        {children}
    </div>
  );
};

type CardProps = {
  className?: string;
  children: ReactNode;
};

export default Card;
