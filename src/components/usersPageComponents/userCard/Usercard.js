import React from 'react';

import { UserCardContainer, UserName, UserRole } from './UserCard.styles';

const Usercard = ({ user }) => {
  const { first_name, last_name, role } = user;
  return (
    <UserCardContainer>
      <UserName>{`${first_name} ${last_name}`}</UserName>
      <UserRole>{role}</UserRole>
    </UserCardContainer>
  );
};

export default Usercard;
