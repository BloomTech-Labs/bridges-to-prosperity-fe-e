import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import CleanedData from '../../data/cleaned3.csv';
import axios from 'axios';

const DownloadButton = () => {
  return (
    <a href="http://btp-labs28-ds-e.eba-p8n7yppy.us-east-1.elasticbeanstalk.com/csv">
      <button className="downloadButton">Download Data</button>
    </a>
  );
};

export default DownloadButton;

DownloadButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string,
  disabled: PropTypes.string,
  handleClick: PropTypes.func,
};
