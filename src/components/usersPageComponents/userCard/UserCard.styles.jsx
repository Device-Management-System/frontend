import styled from 'styled-components';

export const UserCardContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr 2fr;
  grid-gap: 1.2rem;
  background: #f5f5f5;
  margin-bottom: 2rem;
  border-radius: 0.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const UserName = styled.p`
  align-self: center;
  font-size: 1.2rem;
`;

export const UserRole = styled.p`
  align-self: center;
  font-size: 1.2rem;
`;

export const UserCardLabel = styled.h6`
  font-size: 1.4rem;
  font-weight: 700;
  align-self: center;
`;
