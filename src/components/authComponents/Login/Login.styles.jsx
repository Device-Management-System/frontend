import styled, { css } from 'styled-components';

export const LoginContainer = styled.section`
  ${({ theme: { bgLight } }) => css`
    width: 100vw;
    height: 520px;
    background: ${bgLight};
    padding: 5rem;
  `}
`;

export const LoginPanel = styled.div`
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

export const LoginForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    text-align: right;
    outline: none;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const defaultStyle = css`
  width: 100%;
  height: 3.8rem;
`;

const submitStyle = css`
  ${({ theme: { primary, hover, regular } }) => css`
    width: 100%;
    height: 3.8rem;
    border-radius: 0.8rem;
    color: #fff;
    background: ${primary};
    transition: all 0.3s ease-in-out;
    font-size: ${regular};
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
  ${({ theme: { inputBg, inputBorder, regular, hover } }) => css`
    background: ${inputBg};
    border-radius: 10px;
    font-size: ${regular};
    font-weight: 600;
    color: #000;
    border: 1px solid ${inputBorder};
    padding: 1.4rem 1.7rem 1.4rem 1.6rem;
    font-family: 'Montserrat', sans-serif;
    transition: 0.2s ease-in-out;

    &::placeholder {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: ${regular};
      color: #000;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${hover};
      border: none;
    }

    ${getInputStyle}
  `}
`;
