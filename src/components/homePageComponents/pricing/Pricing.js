import React, { useState } from 'react';
import PriceCard from './PriceCard';
import { subscriptions } from '../../../utils/data';

import {
  PricingBg,
  PricingContainer,
  PricingTop,
  PricingHeader,
  SliderBg,
  Slider,
  PricingBottom,
} from './Pricing.styles';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  return (
    <PricingBg id="pricing">
      <PricingContainer>
        <PricingTop>
          <PricingHeader>Pricing</PricingHeader>
          <SliderBg>
            <Slider
              onClick={() => (isMonthly ? setIsMonthly(!isMonthly) : null)}
              sliderOn={isMonthly ? false : true}
            >
              Bill Yearly
            </Slider>
            <Slider
              onClick={() => (!isMonthly ? setIsMonthly(!isMonthly) : null)}
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

export default Pricing;
