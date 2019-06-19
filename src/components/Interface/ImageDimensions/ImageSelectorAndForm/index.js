import React, { Component } from 'react';
import {
  toggleImageDimensionsPopup,
  setImageDimensions
} from '../../../../actions/index';
import { StyledForm } from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    const { imageHeight, imageWidth, imageBorder } = this.props;
    this.state = {
      formControls: {
        imageHeight: { value: imageHeight },
        imageWidth: { value: imageWidth },
        imageBorder: { value: imageBorder }
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
      dispatch(setImageDimensions(value));
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

  submitForm = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { formControls } = this.state;
    const height = parseInt(formControls.imageHeight.value, 10);
    const width = parseInt(formControls.imageWidth.value, 10);
    const border = parseInt(formControls.imageBorder.value, 10);
    dispatch(setImageDimensions({ height, width, border }));
  };

  render() {
    const { formControls } = this.state;
    return (
      <div>
        <h2>Image Dimensions</h2>
        <p>
          <em>Images will maintain their original aspect ratio, so dimensions entered below that don't match an image's aspect ratio will create a border added to the image's height or width.</em>
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
        </div>
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
            <span>Image Border</span>
            <input
              type="number"
              min="0"
              step="1"
              name="imageBorder"
              value={formControls.imageBorder.value}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </StyledForm>
      </div>
    );
  }
}
