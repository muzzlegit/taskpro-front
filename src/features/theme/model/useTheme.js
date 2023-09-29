import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getUserTheme } from 'store/userSlice';
import { theme, themesKit } from 'utils';

const useTheme = () => {
  const themeName = useSelector(getUserTheme);

  const [currentTheme, setCurrentTheme] = useState({
    ...theme,
    colors: { ...theme.colors, ...themesKit[themeName ?? 'default'] },
  });

  useEffect(() => {
    setCurrentTheme({
      ...theme,
      colors: { ...theme.colors, ...themesKit[themeName ?? 'default'] },
    });
  }, [themeName]);

  return { currentTheme };
};

export default useTheme;
