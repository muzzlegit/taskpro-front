import PropTypes from 'prop-types';
import { themesList } from '../../constants';

import { Container, Item, List } from './ThemeList.styled';

const ThemeList = ({ activeTheme, setTheme }) => {
  return (
    <Container>
      <List>
        {themesList.map(themeName => {
          return (
            <Item
              key={themeName}
              onClick={() => {
                setTheme(themeName);
              }}
              isActive={activeTheme === themeName}
            >
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default ThemeList;

ThemeList.propTypes = {
  activeTheme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
