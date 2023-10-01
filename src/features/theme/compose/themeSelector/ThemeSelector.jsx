import { SvgIcon } from 'components';
import { useTheme, useThemeSelector } from 'features/theme/model';
import { ThemeHeader, ThemeList } from 'features/theme/ui';
import { Container } from './ThemeSelector.styled';

const ThemeSelector = () => {
  const { isOpen, activeTheme, handleListWindow } = useThemeSelector();
  const { setTheme } = useTheme();

  return (
    <Container onClick={handleListWindow}>
      <ThemeHeader icon={<SvgIcon svgName="icon-arrow-down" size="16px" />} />
      {isOpen ? (
        <ThemeList activeTheme={activeTheme} setTheme={setTheme} />
      ) : null}
    </Container>
  );
};

export default ThemeSelector;
