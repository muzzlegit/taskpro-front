import { Logo } from 'components';
import userPNGx1 from 'assets/welcome/welcome.png';
import userPNGx2 from 'assets/welcome/welcome@2x.png';
import userPNGx3 from 'assets/welcome/welcome@3x.png';
import userWEBPx1 from 'assets/welcome/welcome.webp';
import userWEBPx2 from 'assets/welcome/welcome@2x.webp';
import userWEBPx3 from 'assets/welcome/welcome@3x.webp';

import { Container, Img, Text, Button } from './WelcomeContent.styled';
import { useState } from 'react';

const WelcomeContent = () => {
  const [selectedButton, setSelectedButton] = useState('registration');

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
        id="registration"
        type="button"
        isActive={selectedButton === 'registration' ? true : null}
        onClick={e => {
          setSelectedButton(e.currentTarget.id);
        }}
      >
        Registration
      </Button>
      <Button
        id="login"
        type="button"
        onClick={e => {
          setSelectedButton(e.currentTarget.id);
        }}
        isActive={selectedButton === 'login' ? true : null}
      >
        Log In
      </Button>
    </Container>
  );
};

export default WelcomeContent;
