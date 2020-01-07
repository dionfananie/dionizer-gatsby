import React from 'react';
import { titleBanner, wrapperBanner } from './styles';
import workImg from '@images/work.svg';
import propTypes from 'prop-types';

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
