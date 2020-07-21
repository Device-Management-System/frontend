import styled, { css } from 'styled-components';

// Form styles
const registerStyle = css`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
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

const loginStyle = css`
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

const contactStyle = css`
  width: 53.9rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  grid-gap: 20px;
`;

const getFormStyle = (props) => {
  if (props.iscontact) return contactStyle;
  if (props.isregister) return registerStyle;
  if (props.islogin) return loginStyle;
};

export const CustomFormContainer = styled.form`
  width: 100%;
  height: auto;

  ${getFormStyle};
`;

// Input styles
const halfInputStyle = css`
  width: 25.9rem;
  height: 5.2rem;
`;

const fullInputStyle = css`
  width: 100%;
  height: 5.2rem;
`;

const authStyle = css`
  width: 100%;
  height: 3.8rem;
`;

const authSubmitStyle = css`
  ${({ theme: { primary } }) => css`
    width: 100%;
    height: 3.8rem;
    background: ${primary};
    color: #fff;
  `}
`;

const submitStyle = css`
  ${({ theme: { primary, hover, regular } }) => css`
    width: 100%;
    height: 5.2rem;
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
  if (props.submit) return submitStyle;
  if (props.isauth) return authStyle;
  if (props.isauthsubmit) return authSubmitStyle;
  return props.half ? halfInputStyle : fullInputStyle;
};

export const CustomInput = styled.input`
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

    ${getInputStyle};
  `}
`;
