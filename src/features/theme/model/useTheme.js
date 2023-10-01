import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useUpdateUserThemeMutation } from 'store/authApi';
import { getUserTheme, setUserTheme } from 'store/userSlice';
import { theme, themesKit } from 'utils';

const useTheme = () => {
  const themeName = useSelector(getUserTheme);
  const dispatch = useDispatch();
  const [updateUserTheme] = useUpdateUserThemeMutation();
  const [currentTheme, setCurrentTheme] = useState({
    ...theme,
    colors: { ...theme.colors, ...themesKit[themeName ?? 'default'] },
  });

  const setTheme = async newTheme => {
    try {
      const { data, error } = await updateUserTheme({ theme: newTheme });
      if (data) dispatch(setUserTheme(data.theme));
    } catch (error) {}
  };

  useEffect(() => {
    setCurrentTheme({
      ...theme,
      colors: { ...theme.colors, ...themesKit[themeName ?? 'default'] },
    });
  }, [themeName]);

  return { currentTheme, setTheme };
};

export default useTheme;
