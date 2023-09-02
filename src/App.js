import { ThemeProvider } from '@emotion/react';
import { useTheme } from 'hooks';
import { WelcomeLayout } from 'layouts';
import { Auth, Welcome } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <Routes>
        <Route path="/" element={<WelcomeLayout />}>
          <Route
            index
            // element={<Navigate to={!isLoggedIn ? '/welcome' : '/home'} />}
            element={<Navigate to={'/welcome'} />}
          />
          <Route path="welcome" element={<Welcome />} />
          <Route path="auth/:id" element={<Auth />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
