import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  maxElementWidth?: number;
  spaceBetween?: number;
  mode?: 'auto-fit' | 'auto-fill';
}

export const Grid: React.FC<Props> = ({
  className,
  children,
  maxElementWidth = 258,
  spaceBetween = 30,
  style,
  mode = 'auto-fill',
}) => {
  return (
    <div
      className={classNames(styles.gridContainer, className)}
      style={{
        gridTemplateColumns: `repeat(${mode}, minmax(${maxElementWidth}px, 1fr))`,
        gridGap: spaceBetween,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
