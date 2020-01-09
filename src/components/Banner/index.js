import React from 'react';
import propTypes from 'prop-types';
import { wrapperBanner } from '../styles';

import { titleBanner } from './styles';

const Banner = ({ title }) => {
  return (
    <div className={wrapperBanner}>
      <img src="https://dionizer.s3-ap-southeast-1.amazonaws.com/work.svg" width="350" alt="" />
      <h1 className={titleBanner}>{title}</h1>
    </div>
  );
};

Banner.propTypes = {
  title: propTypes.string,
};

Banner.defaultProps = {
  title: ``,
};

export default Banner;
