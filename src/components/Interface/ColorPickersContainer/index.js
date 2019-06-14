import React from 'react';
import { connect } from 'react-redux';
import ColorPickersOptions from './ColorPickersOptions';

const ColorPickersContainer = props => (
  <div>
    <h2>Colors</h2>
    <ColorPickersOptions {...props} />
  </div>
);

const mapStateToProps = ({ files }) => ({ files });

export default connect(mapStateToProps)(ColorPickersContainer);
