import { useEffect, useState } from 'react';
import { theme, themesKit } from 'libs';

const useTheme = defaultTheme => {
  const [themeName, setThemeName] = useState(defaultTheme ?? 'default');

  const [currentTheme, setCurrentTheme] = useState({
    ...theme,
    colors: { ...theme.colors, ...themesKit[defaultTheme ?? 'default'] },
  });
  console.log('🚀 ~ themeName:', themeName);
  console.log('🚀 ~ currentTheme:', currentTheme);
  useEffect(() => {
    setCurrentTheme({
      ...theme,
      colors: { ...theme.colors, ...themesKit[themeName ?? 'default'] },
    });
  }, [themeName]);

  return { currentTheme, setThemeName };
};

export default useTheme;
