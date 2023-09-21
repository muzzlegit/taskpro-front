import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getIsLogin } from 'store/userSlice';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  isFetching,
}) => {
  const isLogin = useSelector(getIsLogin);
  const shouldRedirect = !isLogin && !isFetching;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
