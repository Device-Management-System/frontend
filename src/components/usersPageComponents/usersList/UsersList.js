import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/user/UserContext';
import UserCard from '../userCard/Usercard';
import { UsersListContainer } from './UsersList.styles';

const UsersList = () => {
  const userContext = useContext(UserContext);
  const { getUsers, users } = userContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);
  console.log(users);
  return (
    <UsersListContainer>
      {users && users.map((user) => <UserCard key={user.id} user={user} />)}
    </UsersListContainer>
  );
};

export default UsersList;
