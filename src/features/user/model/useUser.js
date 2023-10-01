import { useSelector } from 'react-redux';
import { getUser } from 'store/userSlice';

const useUser = () => {
  const user = useSelector(getUser);
  return { user };
};

export default useUser;
