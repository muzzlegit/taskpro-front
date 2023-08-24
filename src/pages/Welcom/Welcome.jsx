import { WelcomeContent, AuthForms } from 'components';

import { Section } from './Welcom.styled';

const Welcome = () => {
  return (
    <Section>
      <WelcomeContent />
      <AuthForms />
    </Section>
  );
};

export default Welcome;
