import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ProgressBar extends React.Component {

  render() {
    return (
      <div className={'progress-bar'}>
        {this.props.currentValue + '/' + this.props.maxValue}
      </div>
    );
  };
}

ProgressBar.propTypes = {
  currentValue: PropTypes.number,
  maxValue: PropTypes.number,
};

ProgressBar.defaultProps = {
  currentValue: 0,
  maxValue: 0,
};