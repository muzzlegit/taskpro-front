import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'libs';
import { Welcome } from 'pages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
