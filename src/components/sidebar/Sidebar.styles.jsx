import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #197ee2;
  color: #fff;
  padding-top: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const SidebarLogo = styled.h2`
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  margin-left: 2rem;
`;

export const SidebarHeader = styled.h4`
  color: #fff;
  opacity: 0.9;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: 22rem;
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
  margin-bottom: 1.6rem;
`;

export const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #fffffd91;
  margin-bottom: 1.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  width: 100%;
  height: 2.5rem;
  padding: 2rem;
  transition: all 0.8s ease-in-out;

  &.active {
    font-weight: 600 !important;
    color: #fff;
    background: #f4f9ff26;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 1.2rem;
`;

export const BlankLink = styled.div`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.2rem;
  background: #f4f9ff26;
  margin-bottom: 1.8rem;
`;
