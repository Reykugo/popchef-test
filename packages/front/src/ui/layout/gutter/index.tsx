import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
  maxWidth?: number | string;
  flexRow?: boolean; // true to change content flex-direction to row
  contentStyle?: React.CSSProperties;
}

const Gutter: React.FC<Props> = ({
  className,
  children,
  maxWidth,
  flexRow = false,
  contentStyle,
}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div
        className={classNames(styles.content)}
        style={{
          maxWidth: maxWidth || '100%',
          flexDirection: flexRow ? 'row' : undefined,
          ...contentStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export { Gutter };
