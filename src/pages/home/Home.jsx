import { Header, ScreensPage, Sidebar } from 'components';
import { Main } from './Home.styled';

const Home = () => {
  return (
    <main>
      <Main>
        <Sidebar></Sidebar>
        <Header />
        <ScreensPage />
      </Main>
    </main>
  );
};

export default Home;
