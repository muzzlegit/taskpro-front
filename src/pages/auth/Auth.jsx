import { LoginForm, RegisterForm } from './components';
import { useAuthForms } from './hooks';

import { Link, useParams } from 'react-router-dom';
import { Container, LinksBox, LinkWrap } from './Auth.styled';

const Auth = () => {
  const { id } = useParams();
  const { selectedForm, handleFormSelect } = useAuthForms(id);
  console.log(selectedForm === 'login');
  return (
    <Container>
      <LinksBox>
        <LinkWrap isActive={selectedForm === 'register'}>
          <Link
            to="/auth/register"
            onClick={() => {
              handleFormSelect('register');
            }}
          >
            Registration
          </Link>
        </LinkWrap>
        <LinkWrap isActive={selectedForm === 'login'}>
          <Link
            to="/auth/login"
            onClick={() => {
              handleFormSelect('login');
            }}
            active={selectedForm === 'login' ? '' : null}
          >
            Log In
          </Link>
        </LinkWrap>
      </LinksBox>

      {selectedForm === 'register' ? <RegisterForm /> : null}
      {selectedForm === 'login' ? <LoginForm /> : null}
    </Container>
  );
};

export default Auth;
