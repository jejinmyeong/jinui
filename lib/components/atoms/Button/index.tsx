import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  className,
  size = 'md',
  fullWidth,
  ...restProps
}: Props) {
  return (
    <button
      className={classNames(
        `${className} ${styles.button}`,
        size === 'sm' && `${styles.sm}`,
        size === 'md' && `${styles.md}`,
        size === 'lg' && `${styles.lg}`,
        fullWidth && `${styles.fullWidth}`,
      )}
      {...restProps}
    />
  );
}
