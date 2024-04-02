import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  color?:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'mint'
    | 'teal'
    | 'cyan'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'gray'
    | 'defalut';
  code: string;
  children: string;
}

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'mint',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink',
  'brown',
  'gray',
  'defalut',
] as const;

const Tag = ({size = 'md', color, code, children}: Props) => {
  const selectedColor = color ?? colors[code.charCodeAt(0) % 13];

  return (
    <span
      className={classNames(
        `${styles.tag}`,
        size === 'md' && `${styles.md}`,
        selectedColor === 'red' && `${styles.colorRed}`,
        selectedColor === 'orange' && `${styles.colorOrange}`,
        selectedColor === 'yellow' && `${styles.colorYellow}`,
        selectedColor === 'green' && `${styles.colorGreen}`,
        selectedColor === 'mint' && `${styles.colorMint}`,
        selectedColor === 'teal' && `${styles.colorTeal}`,
        selectedColor === 'blue' && `${styles.colorBlue}`,
        selectedColor === 'indigo' && `${styles.colorIndigo}`,
        selectedColor === 'purple' && `${styles.colorPurple}`,
        selectedColor === 'pink' && `${styles.colorPink}`,
        selectedColor === 'brown' && `${styles.colorBrown}`,
        selectedColor === 'gray' && `${styles.colorGray}`,
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
