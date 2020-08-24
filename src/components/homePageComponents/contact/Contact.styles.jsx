import styled, { css } from 'styled-components';

export const ContactContainer = styled.section`
  width: 100%;
  height: auto;
  background: #fafafa;
  padding: 5rem;

  h4 {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 3.4rem;
    text-align: center;
    margin-bottom: 4rem;
  }
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
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const ContactTop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 21px;
  margin: 0;
`;

export const ContactTextA = styled.textarea`
  ${({ theme: { inputBg, inputBorder, regular, hover } }) => css`
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
    resize: none;
    overflow: hidden;

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
  `}
`;
