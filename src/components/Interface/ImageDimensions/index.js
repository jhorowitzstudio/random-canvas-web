import React from 'react';
import { connect } from 'react-redux';
import ImageSelectorAndForm from './ImageSelectorAndForm';

const ImageDimensions = props => <ImageSelectorAndForm {...props} />;

const mapStateToProps = ({
  staggerImages,
  imageHeight,
  imageWidth,
  imageMortar,
  imageDimensionsPopup
}) => ({
  staggerImages,
  imageHeight,
  imageWidth,
  imageMortar,
  imageDimensionsPopup
});

export default connect(mapStateToProps)(ImageDimensions);
