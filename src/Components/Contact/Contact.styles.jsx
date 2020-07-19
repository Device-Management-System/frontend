import styled, { css } from 'styled-components';

export const ContactContainer = styled.section`
  ${({ theme: { bgLight } }) => css`
    width: 100%;
    height: 55.7rem;
    background: ${bgLight};
    padding: 5rem;

    h4 {
      color: #000;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 3.8rem;
      text-align: center;
      margin-bottom: 4rem;
    }
  `}
`;

export const ContactWrapper = styled.div`
  width: 1140px;
  max-width: 1140px;
  margin: 0 auto;
`;

export const ContactForm = styled.form`
  width: 53.9rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  grid-gap: 20px;
`;

export const ContactTop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 21px;
`;

const halfInputStyle = css`
  width: 25.9rem;
  height: 5.2rem;
`;

const fullInputStyle = css`
  width: 100%;
  height: 5.2rem;
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
    font-weight: 500;

    &:hover {
      background: ${hover};
    }
  `}
`;

const getInputStyle = (props) => {
  if (props.submit) return submitStyle;
  return props.half ? halfInputStyle : fullInputStyle;
};

export const ContactInput = styled.input`
  ${({ theme: { inputBg, inputBorder, regular } }) => css`
    background: ${inputBg};
    border-radius: 10px;
    font-size: ${regular};
    font-weight: 500;
    color: #000;
    border: 1px solid ${inputBorder};
    padding: 1.4rem 1.7rem 1.4rem 1.6rem;
    font-family: 'Montserrat', sans-serif;

    &::placeholder {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: ${regular};
      color: #000;
    }

    ${getInputStyle};
  `}
`;

export const ContactTextA = styled.textarea`
  ${({ theme: { inputBg, inputBorder, regular } }) => css`
    width: 100%;
    height: 14.9rem;
    border-radius: 10px;
    border: 1px solid ${inputBorder};
    background: ${inputBg};
    padding: 1.4rem 1.7rem 1.4rem 1.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: ${regular};
    color: #000;

    &::placeholder {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: ${regular};
      color: #000;
    }
  `}
`;
