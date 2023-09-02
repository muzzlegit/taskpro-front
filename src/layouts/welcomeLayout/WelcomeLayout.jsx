import { Outlet } from 'react-router-dom';
import { Section } from './WelcomeLayout.styled';

const WelcomeLayout = () => {
  return (
    <main>
      <Section>
        <Outlet />
      </Section>
    </main>
  );
};

export default WelcomeLayout;
