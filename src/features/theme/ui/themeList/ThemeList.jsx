import { themesList } from '../../constants';

import { Container, Item, List } from './ThemeList.styled';

const ThemeList = () => {
  return (
    <Container>
      <List>
        {themesList.map(themeName => {
          return (
            <Item key={themeName}>
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default ThemeList;
