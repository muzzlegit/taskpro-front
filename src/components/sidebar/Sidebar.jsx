import { Logo, UserLogout } from 'components';
import { Aside } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Aside>
      <Logo variant="user" />
      <UserLogout />
    </Aside>
  );
};

export default Sidebar;
