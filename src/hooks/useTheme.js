import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getUserTheme } from 'state/userSlice';
import { theme, themesKit } from 'utils';

const useTheme = () => {
  const themeName = useSelector(getUserTheme);

  const [currentTheme, setCurrentTheme] = useState({
    ...theme,
    colors: { ...theme.colors, ...themesKit[themeName ?? 'default'] },
  });
  console.log('🚀 ~ themeName:', themeName);
  console.log('🚀 ~ currentTheme:', currentTheme);
  useEffect(() => {
    setCurrentTheme({
      ...theme,
      colors: { ...theme.colors, ...themesKit[themeName ?? 'default'] },
    });
  }, [themeName]);

  return { currentTheme };
};

export default useTheme;
