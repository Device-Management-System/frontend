import React from 'react';

import CardBtn from '../customComponents/CustomButton/CustomButton';

import {
  PricingBg,
  PricingContainer,
  PricingTop,
  PricingHeader,
  SliderBg,
  Slider,
  PricingBottom,
  PricingCard,
  PricingCardHeader,
  PricingProduct,
  Price,
  Features,
} from './Pricing.styles';

const Pricing = (props) => {
  return (
    <PricingBg id="pricing">
      <PricingContainer>
        <PricingTop>
          <PricingHeader>Pricing</PricingHeader>
          <SliderBg>
            <Slider on>Bill Yearly</Slider>
            <Slider>Bill Monthly</Slider>
          </SliderBg>
        </PricingTop>
        <PricingBottom>
          <PricingCard>
            <PricingCardHeader>
              <PricingProduct>Free</PricingProduct>
              <Price>$0</Price>
            </PricingCardHeader>
            <Features>{/*  */}</Features>
            <CardBtn pricing>Try for free</CardBtn>
          </PricingCard>
          <PricingCard pricingCardOn>
            <PricingCardHeader>
              <PricingProduct>Starter</PricingProduct>
              <Price>$20</Price>
            </PricingCardHeader>
            <Features>{/*  */}</Features>
            <CardBtn pricingR>Subscribe</CardBtn>
          </PricingCard>
          <PricingCard>
            <PricingCardHeader>
              <PricingProduct>Pro</PricingProduct>
              <Price>$40</Price>
            </PricingCardHeader>
            <Features>{/*  */}</Features>
            <CardBtn pricing>Try for free</CardBtn>
          </PricingCard>
          <PricingCard>
            <PricingCardHeader>
              <PricingProduct>Enterprise</PricingProduct>
              <Price>Custom</Price>
            </PricingCardHeader>
            <Features>{/*  */}</Features>
            <CardBtn pricing>Try for free</CardBtn>
          </PricingCard>
        </PricingBottom>
      </PricingContainer>
    </PricingBg>
  );
};

export default Pricing;
