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
            <Slider on="true">Bill Yearly</Slider>
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
            <CardBtn pricing="true" to="#">
              Try for free
            </CardBtn>
          </PricingCard>
          <PricingCard pricingCardOn="true">
            <PricingCardHeader>
              <PricingProduct>Starter</PricingProduct>
              <Price>$20</Price>
            </PricingCardHeader>
            <Features>{/*  */}</Features>
            <CardBtn pricingr="true" to="#">
              Subscribe
            </CardBtn>
          </PricingCard>
          <PricingCard>
            <PricingCardHeader>
              <PricingProduct>Pro</PricingProduct>
              <Price>$40</Price>
            </PricingCardHeader>
            <Features>{/*  */}</Features>
            <CardBtn pricing="true" to="#">
              Subscribe
            </CardBtn>
          </PricingCard>
          <PricingCard>
            <PricingCardHeader>
              <PricingProduct>Enterprise</PricingProduct>
              <Price>Custom</Price>
            </PricingCardHeader>
            <Features>{/*  */}</Features>
            <CardBtn pricing="true" to="#">
              Subscribe
            </CardBtn>
          </PricingCard>
        </PricingBottom>
      </PricingContainer>
    </PricingBg>
  );
};

export default Pricing;
