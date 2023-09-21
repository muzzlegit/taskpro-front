import { useDispatch } from 'react-redux';
import { useLoginUserMutation, useRegisterUserMutation } from 'store/authSlice';
import { setRegisterChecker, setUser } from 'store/userSlice';

const useAuth = () => {
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

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
      if (data) {
        dispatch(setUser(data));
      }

      if (error) throw error;
    } catch (error) {}
  };

  return { handleRegister, handleLogin };
};

export default useAuth;
