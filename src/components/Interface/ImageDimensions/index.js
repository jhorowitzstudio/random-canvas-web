import React from 'react';
import { connect } from 'react-redux';
import ImageSelectorAndForm from './ImageSelectorAndForm';

const ImageDimensions = props => <ImageSelectorAndForm {...props} />;

const mapStateToProps = ({
  imageHeight,
  imageWidth,
  imageBorder,
  imageDimensionsPopup
}) => ({
  imageHeight,
  imageWidth,
  imageBorder,
  imageDimensionsPopup
});

export default connect(mapStateToProps)(ImageDimensions);
