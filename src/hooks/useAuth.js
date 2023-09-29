import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshUserQuery,
  useRegisterUserMutation,
} from 'store/authApi';
import {
  getIsLogin,
  getToken,
  refreshUser,
  removeUser,
  setRegisterChecker,
  setUser,
} from 'store/userSlice';

const useAuth = () => {
  const isLogin = useSelector(getIsLogin);
  const token = useSelector(getToken);
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [logoutUser] = useLogoutUserMutation();
  const { data, isFetching } = useRefreshUserQuery(token, {
    skip: token && !isLogin ? false : true,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.name) dispatch(refreshUser(data));
  }, [data, dispatch]);

  const handleRegister = async newUser => {
    try {
      const { data, error } = await registerUser(newUser);
      if (data) {
        dispatch(setRegisterChecker());
        const { data, error } = await loginUser({
          email: newUser.email,
          password: newUser.password,
        });
        if (data) {
          dispatch(setUser(data));
        }
        if (error) throw error;
      }
      if (error) throw error;
    } catch (error) {}
  };

  const handleLogin = async user => {
    try {
      const { data, error } = await loginUser(user);
      if (data) dispatch(setUser(data));
      if (error) throw error;
    } catch (error) {}
  };

  const handleLogout = async () => {
    try {
      const { data, error } = await logoutUser();

      if (data) {
        dispatch(removeUser());
      }
      if (error) throw error;
    } catch (error) {}
  };

  return { handleRegister, handleLogin, handleLogout, isFetching };
};

export default useAuth;
