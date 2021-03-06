import styled, { css } from 'styled-components';

const defaultStyle = css`
  ${({ theme: { primary, hover } }) => css`
  width: 150px;
  background: ${primary};
  color: #fff !important;
  border: 0;
  height: 48px;
  text-decoration: none;
  padding: 16px 20px 16px 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #fff;
    background: ${hover};
    font-weight: 600;
  }
}
`}
`;

const contactStyle = css`
  ${({ theme: { primary, hover } }) => css`
    width: 100%;
    background: ${primary};
    color: #fff;
    border: 0;
    padding: 16px 20px 16px 20px;

    &:hover {
      text-decoration: none;
      background: ${hover};
      font-weight: 600;
    }
  `}
`;

const inverted = css`
  ${({ theme: { regular, primary } }) => css`
  height: 40px;
  background: none;
  border: 1px solid #000;
  color: #000;
  font-size: ${regular};
  text-decoration: none;
  padding: 11px 20px 11px 20px;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  margin: 0;

  &:hover {
    background: ${primary};
    color: #fff !important;
    text-decoration: none;
    border: 1px solid ${primary};
  }
}
`}
`;

const googleSignInStyles = css`
  ${({ theme: { googleRed, medium } }) => css`
    background: ${googleRed};
    color: #fff;
    border: none;
    height: 4.4rem;
    text-decoration: none;
    padding: 13px 18px 13px 18px;
    transition: all 0.2s ease-in-out;
    font-size: ${medium};
    border-radius: 0.4rem;

    &:hover {
      background: #b92e22;
      text-decoration: none;
      color: #fff;
    }
  `}
`;

const pricingStylesDefault = css`
  ${({ theme: { primary, small, hover } }) => css`
    width: 14.5rem;
    height: 3.8rem !important;
    color: #fff;
    background: ${primary};
    font-size: ${small};
    font-weight: 600;
    letter-spacing: 0.14px;
    padding: 13px 20px 13px 20px;
    border: none;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  `}
`;

const pricingStylesReversed = css`
  ${({ theme: { primary, small } }) => css`
    width: 14.5rem;
    height: 3.8rem;
    color: ${primary};
    background: #fff;
    font-size: ${small};
    font-weight: 600;
    letter-spacing: 0.14px;
    padding: 13px 20px 13px 20px;
    border: none;

    &:hover {
      /* opacity 0.8;*/
      color: ${primary};
      text-decoration: none;
    }
  `}
`;

const getButtonStyle = (props) => {
  if (props.isgooglesingin) {
    return googleSignInStyles;
  }

  if (props.pricing) {
    return pricingStylesDefault;
  }

  if (props.pricingr) {
    return pricingStylesReversed;
  }

  if (props.contact) {
    return contactStyle;
  }

  return props.inverted ? inverted : defaultStyle;
};

export const CustomButtonContainer = styled.button`
  ${({ theme: { regular } }) => css`
  max-width: 53.9rem;
  width: auto;
  border-radius: 0.4rem;
  letter-spacing: 0.26px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: ${regular};
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;

  ${getButtonStyle};
  }
  `}
`;
