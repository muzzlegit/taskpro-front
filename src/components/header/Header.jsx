import { ThemeSelector } from 'features/theme';
import { UserInfo } from 'features/user';
import { Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <ThemeSelector />
      <UserInfo />
    </Container>
  );
};

export default Header;
