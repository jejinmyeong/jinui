import React, {useContext, useMemo} from 'react';
import isFunction from '../utils/isFunction';

export interface DefalutTheme {
  [key: string]: any;
}

type ThemeFn = (outerTheme?: DefalutTheme | undefined) => DefalutTheme;
type ThemeArgument = DefalutTheme | ThemeFn;

type Props = {
  children?: React.ReactNode;
  theme: ThemeArgument;
};

export const ThemeContext = React.createContext<DefalutTheme | undefined>(
  undefined,
);

export const ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(
  theme: ThemeArgument,
  outerTheme?: DefalutTheme | undefined,
): DefalutTheme {
  if (!theme) {
    throw new Error('theme is not defined.');
  }

  if (isFunction(theme)) {
    const themeFn = theme as ThemeFn;
    const mergedTheme = themeFn(outerTheme);

    if (
      process.env.NODE_ENV !== 'production' &&
      (mergedTheme === null ||
        Array.isArray(mergeTheme) ||
        typeof mergeTheme !== 'object')
    ) {
      throw new Error('theme is not vaild');
    }
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    throw new Error('theme is not object');
  }

  return outerTheme ? {...outerTheme, ...theme} : theme;
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('theme is not exist');
  }

  return theme;
};

const ThemeProvider = (props: Props) => {
  const outerTheme = React.useContext(ThemeContext);
  const themeContext = useMemo(
    () => mergeTheme(props.theme, outerTheme),
    [props.theme, outerTheme],
  );

  if (!props.children) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
