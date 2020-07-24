import styled, { css } from 'styled-components';

export const LoginContainer = styled.section`
  ${({ theme: { bgLight } }) => css`
    width: 100vw;
    height: 520px;
    padding: 5rem;
  `}
`;

export const LoginPanel = styled.div`
  ${({ theme: { radius } }) => css`
    width: 38rem;
    height: 46.3rem;
    border-radius: 0.4rem;
    margin: 0 auto;
    padding: 4rem;
    border: 1px solid #ddd;

    h4 {
      color: #282828;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 2.2rem;
      text-align: center;
      margin-bottom: 4rem;

      span {
        font-weight: 600;
        color: #000;
      }
    }
  `}
`;

export const LoginForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;

  .create-account {
    text-decoration: none;
    font-size: 1.1rem;
    text-align: right;
    outline: none;
    color: #777;
    font-weight: 600;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const defaultStyle = css`
  width: 100%;
  height: 4.4rem;
`;

const submitStyle = css`
  ${({ theme: { primary, hover, medium } }) => css`
    width: 100%;
    height: 5rem;
    border-radius: 0.4rem;
    color: #fff;
    background: ${primary};
    transition: all 0.3s ease-in-out;
    font-size: ${medium};
    font-weight: 600;
    border: 0;

    &:hover {
      background: ${hover};
    }
  `}
`;

const getInputStyle = (props) => {
  return props.submit ? submitStyle : defaultStyle;
};

export const LoginInput = styled.input`
  ${({ theme: { medium, hover } }) => css`
    background: #f3f3f3;
    border-radius: 0.4rem;
    font-size: ${medium};
    font-weight: 600;
    color: #000;
    border: 1px solid #ddd;
    padding: 1.4rem 1.7rem 1.4rem 1.6rem;
    font-family: 'Montserrat', sans-serif;
    transition: 0.2s ease-in-out;

    &::placeholder {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: ${medium};
      color: rgba(0, 0, 0, 0.4);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${hover};
      border: none;
    }

    ${getInputStyle}
  `}
`;
