import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getIsLogin } from 'store/userSlice';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(getIsLogin);

  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
