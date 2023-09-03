import { RegisterForm, useAuthForms } from 'features';
import { Link, useParams } from 'react-router-dom';
import { Container } from './Auth.styled';

const Auth = () => {
  const { id } = useParams();
  const { selectedForm, handleFormSelect } = useAuthForms(id);
  return (
    <Container>
      <Link
        to="/auth/register"
        onClick={() => {
          handleFormSelect('register');
        }}
      >
        Registration
      </Link>
      <Link
        to="/auth/login"
        onClick={() => {
          handleFormSelect('login');
        }}
      >
        Log In
      </Link>
      {selectedForm === 'register' ? <RegisterForm /> : null}
    </Container>
  );
};

export default Auth;
