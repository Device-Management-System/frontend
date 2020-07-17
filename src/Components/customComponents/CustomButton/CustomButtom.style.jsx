import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const defaultStyle = css`
  ${({ theme: { primary, hover } }) => css`
  width: 150px;
  background: ${primary};
  color: #fff;
  border: 0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #fff;
    background: ${hover};
  }
}
`}
`;

const inverted = css`
  ${({ theme: { regular, primary } }) => css`

  background: none;
  border: 1px solid #000;
  color: #000;
  font-size: ${regular};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

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
  ${({ theme: { googleRed } }) => css`
    background: ${googleRed};
    color: #fff;
    border: none;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #b92e22;
      text-decoration: none;
    }
  `}
`;

const pricingStylesDefault = css`
  ${({ theme: { primary, small, hover } }) => css`
    width: 14.5rem;
    height: 3.5rem;
    color: #fff;
    background: ${primary};
    font-size: ${small};
    font-weight: 600;
    letter-spacing: 0.14px;
    padding: 11px 40px 11px 40px;
    border: none;

    &:hover {
      background: ${hover};
    }
  `}
`;

const pricingStylesReversed = css`
  ${({ theme: { primary, small, hover } }) => css`
    width: 14.5rem;
    height: 3.5rem;
    color: ${primary};
    background: #fff;
    font-size: ${small};
    font-weight: 600;
    letter-spacing: 0.14px;
    padding: 11px 40px 11px 40px;
    border: none;

    &:hover {
      opacity 0.8;
    }
  `}
`;

const sliderStyled = css`
  ${({ theme: { darkGray } }) => css`
    width: 84px;
    height: 26px;
    background: #fff;
    color: ${darkGray};
    box-shadow: #000 0 2px 5px 0 0.08;
  `}
`;

const getButtonStyle = (props) => {
  if (props.isGoogleSingIn) {
    return googleSignInStyles;
  }

  if (props.pricing) {
    return pricingStylesDefault;
  }

  if (props.pricingR) {
    return pricingStylesReversed;
  }

  if (props.slider) {
    return sliderStyled;
  }

  return props.inverted ? inverted : defaultStyle;
};

export const CustomButtonContainer = styled(Link)`
  ${({ theme: { regular } }) => css`
  max-width: 53.9rem;
  width: auto;
  height: 44px;
  border-radius: 0.8rem;
  letter-spacing: 0.26px;
  padding: 11px 20px 11px 20px;
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
