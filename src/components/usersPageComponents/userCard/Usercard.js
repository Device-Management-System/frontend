import React from 'react';

import { UserCardContainer, UserName, UserRole } from './UserCard.styles';

const Usercard = ({ user, updateRole, removeRole }) => {
  const { first_name, last_name, role, id, is_admin } = user;
  return (
    <UserCardContainer>
      <UserName>{`${first_name} ${last_name}`}</UserName>
      <UserRole>{role}</UserRole>

      {!is_admin && (
        <button
          onClick={async () => {
            await removeRole(id);
            await updateRole(id, 'user');
          }}
        >
          Make user
        </button>
      )}

      {is_admin && (
        <button
          onClick={async () => {
            await removeRole(id);
            await updateRole(id, 'admin');
          }}
        >
          Make Admin
        </button>
      )}
    </UserCardContainer>
  );
};

export default Usercard;
