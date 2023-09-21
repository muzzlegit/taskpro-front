import { ThemeProvider } from '@emotion/react';
import { useTheme } from 'hooks';
import { WelcomeLayout } from 'layouts';
import { Auth, Home, Welcome } from 'pages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from 'routes';
import { useRefreshUserQuery } from 'store/authSlice';
import { getIsLogin, getToken, refreshUser } from 'store/userSlice';

const App = () => {
  const { currentTheme } = useTheme();
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin);
  const token = useSelector(getToken);
  const { data, isFetching } = useRefreshUserQuery(token, {
    skip: token && isLogin,
  });

  useEffect(() => {
    if (data?.name) dispatch(refreshUser(data));
  }, [data, dispatch]);

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
            <PrivateRoute component={Home} redirectTo="login" isFetching />
          }
          isFetching={isFetching}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
