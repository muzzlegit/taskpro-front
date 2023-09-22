import { SvgIcon } from 'components';
import { useAuth } from 'hooks';
import { Container } from './UserLogout.styled';

const UserLogout = () => {
  const { handleLogout } = useAuth();

  return (
    <Container onClick={handleLogout}>
      <SvgIcon svgName="icon-logout" size="32px" />
      <span>Log Out</span>
    </Container>
  );
};

export default UserLogout;
