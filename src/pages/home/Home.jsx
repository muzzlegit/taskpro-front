import { Sidebar } from './components';
import { Container, Section } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <Sidebar></Sidebar>
      </Container>
    </Section>
  );
};

export default Home;
