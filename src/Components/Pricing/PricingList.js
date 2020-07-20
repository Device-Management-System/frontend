import React, { useState } from 'react';
import PriceCard from './PriceCard';
import { subscriptions } from '../../utils/index';

import {
  PricingBg,
  PricingContainer,
  PricingTop,
  PricingHeader,
  SliderBg,
  Slider,
  PricingBottom,
} from './Pricing.styles';

const PricingList = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  return (
    <PricingBg id="pricing">
      <PricingContainer>
        <PricingTop>
          <PricingHeader>Pricing</PricingHeader>
          <SliderBg>
            <Slider
              onClick={() => setIsMonthly(!isMonthly)}
              sliderOn={isMonthly ? false : true}
            >
              Bill Yearly
            </Slider>
            <Slider
              onClick={() => setIsMonthly(!isMonthly)}
              sliderOn={isMonthly ? true : false}
            >
              Bill Monthly
            </Slider>
          </SliderBg>
        </PricingTop>
        <PricingBottom>
          {subscriptions.map(({ id, ...otherProps }) => {
            return <PriceCard key={id} {...otherProps} isMonthly={isMonthly} />;
          })}
        </PricingBottom>
      </PricingContainer>
    </PricingBg>
  );
};

export default PricingList;
