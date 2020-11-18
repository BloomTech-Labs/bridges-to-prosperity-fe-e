import React from 'react';
import PropTypes from 'prop-types';

const DownloadButton = () => {
  return (
    <a href="https://e-ds-labs28.bridgestoprosperity.dev/">
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
