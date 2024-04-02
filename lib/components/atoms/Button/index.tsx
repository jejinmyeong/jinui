import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'error' | 'default';
  fullWidth?: boolean;
}

export function Button({
  className,
  size = 'md',
  color = 'default',
  fullWidth,
  ...restProps
}: Props) {
  return (
    <button
      className={classNames(
        `${styles.button}`,
        className && `${className}`,
        size === 'sm' && `${styles.sm}`,
        size === 'md' && `${styles.md}`,
        size === 'lg' && `${styles.lg}`,
        fullWidth && `${styles.fullWidth}`,
        color === 'default' && `${styles.default}`,
        color === 'primary' && `${styles.primary}`,
        color === 'error' && `${styles.error}`,
      )}
      {...restProps}
    />
  );
}
