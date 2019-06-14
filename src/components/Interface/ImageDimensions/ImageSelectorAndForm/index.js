import React, { Component } from 'react';
import Select from '../../../Common/Select';
import imageDimensions from '../../../../constants/imageDimensions';
import {
  toggleImageDimensionsPopup,
  setImageDimensions,
  toggleStaggerImages
} from '../../../../actions/index';
import { StyledForm } from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    const { imageHeight, imageWidth, imageMortar } = this.props;
    this.state = {
      formControls: {
        imageHeight: { value: imageHeight },
        imageWidth: { value: imageWidth },
        imageMortar: { value: imageMortar }
      }
    };
  }

  handleSelectChange = event => {
    const { imageDimensionsPopup, dispatch } = this.props;
    const { value } = event.target;
    if (value === 'Custom...') {
      dispatch(toggleImageDimensionsPopup());
    } else {
      if (imageDimensionsPopup === true) dispatch(toggleImageDimensionsPopup());
      dispatch(setImageDimensions(imageDimensions[value]));
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        formControls: {
          ...prevState.formControls,
          [name]: {
            ...prevState.formControls[name],
            value
          }
        }
      };
    });
  };

  handleToggleStaggerImages = () => {
    const { dispatch } = this.props;
    dispatch(toggleStaggerImages());
  };

  submitForm = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { formControls } = this.state;
    const height = parseInt(formControls.imageHeight.value, 10);
    const width = parseInt(formControls.imageWidth.value, 10);
    const mortar = parseInt(formControls.imageMortar.value, 10);
    dispatch(setImageDimensions({ height, width, mortar }));
  };

  render() {
    const { value, imageDimensionsPopup, staggerImages } = this.props;
    const { formControls } = this.state;
    return (
      <div>
        <h2>Image Dimensions</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Select
            noLeftMargin
            handleChange={this.handleSelectChange}
            value={value}
            options={imageDimensions}
            custom
          />
          <span style={{ marginRight: 10 }}>Stagger Images</span>
          <input
            type="checkbox"
            name="staggerImages"
            checked={staggerImages}
            onChange={this.handleToggleStaggerImages}
          />
        </div>
        {imageDimensionsPopup && (
          <StyledForm onSubmit={this.submitForm}>
            <div>
              <span>Image Height</span>
              <input
                type="number"
                min="0"
                step="1"
                name="imageHeight"
                value={formControls.imageHeight.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <span>Image Width</span>
              <input
                type="number"
                min="0"
                step="1"
                name="imageWidth"
                value={formControls.imageWidth.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <span>Image Mortar</span>
              <input
                type="number"
                min="0"
                step="1"
                name="imageMortar"
                value={formControls.imageMortar.value}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Submit" />
          </StyledForm>
        )}
      </div>
    );
  }
}
