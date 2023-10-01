import { useUser } from 'features/user/model';
import { Avatar, Info } from 'features/user/ui';
import { Container } from './UserInfo.styled';

const UserInfo = () => {
  const { user } = useUser();

  return (
    <Container>
      <Avatar variant="info" />
      <Info userName={user.name} />
    </Container>
  );
};

export default UserInfo;
