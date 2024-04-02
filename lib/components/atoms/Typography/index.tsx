import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface TypographyProps {
  className?: string;
  variant?: 'h1' | 'h2' | 'p' | 'span';
  category?: 'heading' | 'subtitle' | 'body' | 'caption';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Typography = ({
  className,
  variant,
  category,
  ...restProps
}: TypographyProps) => {
  const Tag = variant ?? 'span';

  return (
    <Tag
      className={classNames(
        `${styles.typography}`,
        className && `${className}`,
        category === 'body' && `${styles.body}`,
      )}
      {...restProps}
    />
  );
};

export default Typography;
