import { ThemeProvider } from '@emotion/react';
import { useAuth, useTheme } from 'hooks';
import { WelcomeLayout } from 'layouts';
import { Auth, Home, Welcome } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from 'routes';

const App = () => {
  const { currentTheme } = useTheme();
  const { isFetching } = useAuth();

  return (
    <ThemeProvider theme={currentTheme}>
      <Routes>
        <Route path="/" element={<WelcomeLayout />}>
          <Route
            index
            element={<RestrictedRoute component={Welcome} redirectTo="/home" />}
          />
          <Route
            path="auth/:id"
            element={<RestrictedRoute component={Auth} redirectTo="/home" />}
          />
        </Route>
        <Route
          path="home"
          element={
            <PrivateRoute
              component={Home}
              redirectTo="/"
              isFetching={isFetching}
            />
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
