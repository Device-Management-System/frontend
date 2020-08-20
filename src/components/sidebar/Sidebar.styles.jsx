import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  ${({ theme: { hover } }) => css`
    width: 100%;
    height: 100%;
    background: ${hover};
    color: #fff;
    padding: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const SidebarLogo = styled.h2`
  color: #fff;
  font-size: 2.4rem;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SidebarLinkContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 0.5rem;
  margin-bottom: 0.8rem;
`;

export const SidebarLink = styled(NavLink)`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 1.5rem;
  &:hover {
    color: #fff;
  }
`;
