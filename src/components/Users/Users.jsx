import users from '../../users.json';
import { UserCard } from 'components/UserCard/UserCard';
import { UserItem, UsersList } from './Users.styled';

export const Users = () => {
  return (
    <UsersList>
      {users.map(user => (
        <UserItem key={user.id}>
          <UserCard user={user} />
        </UserItem>
      ))}
    </UsersList>
  );
};
