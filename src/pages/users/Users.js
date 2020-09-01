import React from 'react';

import UserList from '../../components/usersPageComponents/usersList/UsersList';
import UsersHeader from '../../components/common/globalHeader/GlobalHeader';

const Users = () => {
  return (
    <>
      <UsersHeader text="Users" />
      <UserList />
    </>
  );
};

export default Users;
