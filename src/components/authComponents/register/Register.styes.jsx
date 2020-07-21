import styled, { css } from 'styled-components';

export const RegisterPanel = styled.div`
  ${({ theme: { radius } }) => css`
    width: 50rem;
    height: 42rem;
    border-radius: ${radius};
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 -10px 20px 0 rgba(0, 110, 163, 0.2);
    padding: 4rem;

    h4 {
      color: #282828;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 2.2rem;
      text-align: left;
      margin-bottom: 4rem;

      span {
        font-weight: 700;
        color: #000;
      }
    }
  `}
`;
