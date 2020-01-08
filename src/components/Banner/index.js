import React from 'react';
import propTypes from 'prop-types';

import workImg from '@images/work.svg';
import { wrapperBanner } from '../styles';

import { titleBanner } from './styles';

const Banner = ({ title }) => {
  return (
    <div className={wrapperBanner}>
      <img src={workImg} width="350" alt="" />
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
