import React from 'react';
import { connect } from 'react-redux';
import ColorPickersOptions from './ColorPickersOptions';

const ColorPickersContainer = props => (
  <div>
    <ColorPickersOptions {...props} />
  </div>
);

const mapStateToProps = ({ files, borderTransparent }) => ({ files, borderTransparent });

export default connect(mapStateToProps)(ColorPickersContainer);
