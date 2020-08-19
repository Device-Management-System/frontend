import styled, { css } from 'styled-components';

const halfInputStyle = css`
  width: 25.9rem;
  height: 4.4rem;
  font-size: 1.4rem;
`;

const fullInputStyle = css`
  width: 100%;
  height: 4.4rem;
  font-size: 1.4rem;
`;

const submitStyle = css`
  ${({ theme: { primary, hover, medium } }) => css`
    width: 100%;
    height: 4.4rem;
    border-radius: 0.4rem;
    color: #fff;
    background: ${primary};
    transition: all 0.3s ease-in-out;
    font-size: ${medium};
    font-weight: 600;
    border: 0;
    margin-bottom: 2rem;

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
  ${({ theme: { medium, hover, inputBorder } }) => css`
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
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.7);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${hover};
      border: none;
    }

    ${getInputStyle};
  `}
`;
