import { Logo } from 'components';

import { Section } from './Welcom.styled';

const Welcome = () => {
  return (
    <Section>
      Welcome
      <Logo variant="welcome" />
    </Section>
  );
};

export default Welcome;
