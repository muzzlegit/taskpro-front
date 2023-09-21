import { Logo } from 'components';
import { Aside, LogoWrap } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Aside>
      <LogoWrap>
        <Logo variant="user" />
      </LogoWrap>
    </Aside>
  );
};

export default Sidebar;
