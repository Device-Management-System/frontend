import styled, { css } from 'styled-components';

export const PricingBg = styled.section`
  /* position: absolute;
  top: 680px; */
  width: 100%;
  height: 670px;
  background: #74d7ff;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0;
  z-index: 50;
`;

export const PricingContainer = styled.div`
  ${({ theme: { radius } }) => css`
    width: 84rem;
    height: 57rem;
    border-radius: ${radius};
    background: #fff;
    margin: 0 auto;
    padding: 4rem;
    display: grid;
    grid-template-rows: 2fr, 4fr;
    grid-gap: 4rem;
    box-shadow: 0 -10px 20px 0 rgba(0, 110, 163, 0.2);
  `}
`;

export const PricingTop = styled.div`
  width: 100%;
  height: 10.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PricingBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.2rem;
`;

export const PricingHeader = styled.h2`
  ${({ theme: { headerLarge } }) => css`
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: ${headerLarge};
  `}
`;

export const SliderBg = styled.div`
  ${({ theme: { bgLight, radius } }) => css`
    width: 17.8rem;
    height: 3.6rem;
    border-radius: ${radius};
    background: ${bgLight};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0.5rem;
  `}
`;

const sliderOff = css`
  background: none;
  box-shadow: none;
  outline: none;
`;

const sliderOn = css`
  ${({ theme: { radius } }) => css`
    background: #fff;
    border-radius: ${radius};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);
    outline: none;
  `}
`;

const getSliderStyle = (props) => (props.sliderOn ? sliderOn : sliderOff);

export const Slider = styled.button`
  ${({ theme: { darkGray, radius } }) => css`
    width: 84px;
    height: 26px;
    font-size: 8px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    border: none;
    color: ${darkGray};
    padding: 8px auto;
    outline: none;
    ${getSliderStyle};
    &:focus {
      outline: none;
    }
  `}
`;

// Pricing cards
const pricingCardDefault = css`
  ${({ theme: { bgLight, darkGray, radius } }) => css`
    widht: 100%;
    height: 34.1rem;
    background: ${bgLight};
    color: ${darkGray};
    border-radius: ${radius};
  `}
`;

const pricingCardOn = css`
  ${({ theme: { primary, radius } }) => css`
    widht: 100%;
    height: 34.1rem;
    background: ${primary};
    color: #fff;
    border-radius: ${radius};
  `}
`;

const getCardStyle = (props) => {
  return props.highlight ? pricingCardOn : pricingCardDefault;
};

export const PricingCardSelect = styled.button`
  ${({ theme: { hover, radius } }) => css`
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
    z-index: 100;
    outline: none;
    border-radius: ${radius};

    &:focus {
      outline: none;
    }
    &:hover {
      box-shadow: 0 0 0 2px ${hover};
    }
  `}
`;

export const PricingCard = styled.div`
  display: grid;
  grid-template-rows: 1fr, 2fr, 1fr;
  grid-gap: 1rem;
  padding: 4rem 1.8rem 1.8rem 1.8rem;
  z-index: 100;
  ${getCardStyle};
`;

export const PricingCardHeader = styled.div`
  width: 100%;
  height: 8.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const PricingProduct = styled.h4`
  font-size: 1.48rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  margin: 2rem;
`;

export const Price = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  font-family: 'Montserrat Alternates', sans-serif;
`;

export const Features = styled.div`
  width: 100%;
  height: 11.4rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 2.2rem;

  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1.3rem;
  }
`;
