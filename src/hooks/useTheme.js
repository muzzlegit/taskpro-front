import { useEffect, useState } from 'react';
import { theme, themesKit } from 'libs';

const useTheme = defaultTheme => {
  const [themeName, setThemeName] = useState(defaultTheme);
  const [currentTheme, setCurrentTheme] = useState({
    ...theme,
    colors: { ...theme.colors, ...themesKit[defaultTheme] },
  });

  useEffect(() => {
    setCurrentTheme({
      ...theme,
      colors: { ...theme.colors.theme, ...themesKit[themeName] },
    });
  }, [themeName]);

  return { currentTheme, setThemeName };
};

export default useTheme;
