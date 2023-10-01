import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserTheme } from 'store/userSlice';

const useThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeTheme = useSelector(getUserTheme);

  const handleListWindow = () => {
    setIsOpen(prev => !prev);
  };

  return { isOpen, handleListWindow, activeTheme };
};

export default useThemeSelector;
