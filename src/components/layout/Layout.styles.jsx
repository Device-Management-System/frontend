import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 8fr;
`;

export const LayoutLeft = styled.div`
  width: 100%;
  height: 100%;
`;

export const LayoutRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;
`;
