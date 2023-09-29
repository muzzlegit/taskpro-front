import { SvgIcon } from 'components';
import { Container } from './ThemeHeader.styled';

const ThemeHeader = () => {
  return (
    <Container>
      <span>Theme</span>
      <SvgIcon svgName="icon-arrow-down" size="16px" />
    </Container>
  );
};

export default ThemeHeader;
