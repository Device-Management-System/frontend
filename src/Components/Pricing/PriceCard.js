import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardBtn from '../customComponents/CustomButton/CustomButton';

import {
  PricingCardSelect,
  PricingCard,
  PricingCardHeader,
  PricingProduct,
  Price,
  Features,
} from './Pricing.styles';

const PriceCard = ({
  title,
  monthly_price,
  annual_price,
  features,
  btn_label,
  highlight,
  isMonthly,
}) => {
  const [selected, setSelected] = useState(highlight);
  useEffect(() => {
    setSelected(selected);
  }, [selected, setSelected]);

  return (
    <PricingCardSelect onClick={() => setSelected(!selected)}>
      <PricingCard highlight={selected ? selected : false}>
        <PricingCardHeader>
          <PricingProduct>{title}</PricingProduct>
          <Price>${!isMonthly ? annual_price : monthly_price}</Price>
        </PricingCardHeader>
        <Features>
          {features.map((feature, id) => {
            return (
              <Fragment key={id}>
                <p>
                  <FontAwesomeIcon
                    icon="check"
                    style={{ marginRight: '1.1rem' }}
                  />
                  {feature}
                </p>
              </Fragment>
            );
          })}
        </Features>
        {selected ? (
          <CardBtn pricingr="true" to="#">
            {btn_label}
          </CardBtn>
        ) : (
          <CardBtn pricing="true" to="#">
            {btn_label}
          </CardBtn>
        )}
      </PricingCard>
    </PricingCardSelect>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  monthly_price: PropTypes.string.isRequired,
  annual_price: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  btn_label: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
  isMonthly: PropTypes.bool.isRequired,
};

export default PriceCard;
