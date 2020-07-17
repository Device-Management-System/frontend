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
    backround: ${primary};
    text-decoration: none;
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

const getButtonStyle = (props) => {
  if (props.isGoogleSingIn) {
    return googleSignInStyles;
  }

  return props.inverted ? inverted : defaultStyle;
};

export const CustomButtonContainer = styled(Link)`
  ${({ theme: { regular } }) => css`
  max-width: 53.9rem;
  min-width: 15rem;
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
