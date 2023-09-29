import { ThemeSelector } from 'features/theme';
import { Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <ThemeSelector />
    </Container>
  );
};

export default Header;
