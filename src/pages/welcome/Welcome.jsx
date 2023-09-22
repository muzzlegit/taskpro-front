import userPNGx1 from 'assets/welcome/welcome.png';
import userWEBPx1 from 'assets/welcome/welcome.webp';
import userPNGx2 from 'assets/welcome/welcome@2x.png';
import userWEBPx2 from 'assets/welcome/welcome@2x.webp';
import userPNGx3 from 'assets/welcome/welcome@3x.png';
import userWEBPx3 from 'assets/welcome/welcome@3x.webp';
import { Logo } from 'components';
import { useAuthForms } from 'hooks';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsRegister } from 'store/userSlice';

import { Button, Container, Img, Text } from './Welcome.styled';

const Welcome = () => {
  const isRegister = useSelector(getIsRegister);
  const { selectedForm, handleFormSelect } = useAuthForms(
    isRegister ? 'login' : 'register'
  );

  return (
    <Container>
      <picture>
        <source
          srcSet={`${userPNGx1} 1x,
                    ${userPNGx2} 2x
                    ${userPNGx3} 3x`}
          type="image/webp"
        />
        <Img
          srcSet={`${userWEBPx1} 1x,
                    ${userWEBPx2} 2x
                    ${userWEBPx3} 3x`}
          src={userPNGx1}
          alt="user with leptop"
        />
      </picture>
      <Logo variant="welcome" />
      <Text>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Text>
      <Button
        id="register"
        type="button"
        isActive={selectedForm === 'register' ? true : null}
        onClick={e => {
          handleFormSelect(e.currentTarget.id);
        }}
      >
        <Link to="/auth/register" style={{ textAlign: 'center' }}>
          Registration
        </Link>
      </Button>
      <Button
        id="login"
        type="button"
        onClick={e => {
          handleFormSelect(e.currentTarget.id);
        }}
        isActive={selectedForm === 'login' ? true : null}
      >
        <Link to="/auth/login" style={{ textAlign: 'center' }}>
          Log In
        </Link>
      </Button>
    </Container>
  );
};

export default Welcome;
