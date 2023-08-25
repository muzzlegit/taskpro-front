import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Welcome } from 'pages';
import { useTheme } from 'hooks';

const App = () => {
  const { currentTheme, setThemeName } = useTheme('dark');
  console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <Routes>
        <Route path="/">
          <Route
            index
            // element={<Navigate to={!isLoggedIn ? '/welcome' : '/home'} />}
            element={<Navigate to={'/welcome'} />}
          />
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
