import styled, { css } from 'styled-components';

export const SidebarContainer = styled.div`
  ${({ theme: { hover } }) => css`
    width: 100%;
    height: 100%;
    background: ${hover};
    color: #fff;
  `}
`;
