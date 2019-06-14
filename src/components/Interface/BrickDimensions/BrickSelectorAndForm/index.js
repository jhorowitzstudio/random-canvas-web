import React, { Component } from 'react';
import Select from '../../../Common/Select';
import brickDimensions from '../../../../constants/brickDimensions';
import {
  toggleBrickDimensionsPopup,
  setBrickDimensions,
  toggleStaggerBricks
} from '../../../../actions/index';
import { StyledForm } from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    const { brickHeight, brickWidth, brickMortar } = this.props;
    this.state = {
      formControls: {
        brickHeight: { value: brickHeight },
        brickWidth: { value: brickWidth },
        brickMortar: { value: brickMortar }
      }
    };
  }

  handleSelectChange = event => {
    const { brickDimensionsPopup, dispatch } = this.props;
    const { value } = event.target;
    if (value === 'Custom...') {
      dispatch(toggleBrickDimensionsPopup());
    } else {
      if (brickDimensionsPopup === true) dispatch(toggleBrickDimensionsPopup());
      dispatch(setBrickDimensions(brickDimensions[value]));
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

  handleToggleStaggerBricks = () => {
    const { dispatch } = this.props;
    dispatch(toggleStaggerBricks());
  };

  submitForm = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { formControls } = this.state;
    const height = parseInt(formControls.brickHeight.value, 10);
    const width = parseInt(formControls.brickWidth.value, 10);
    const mortar = parseInt(formControls.brickMortar.value, 10);
    dispatch(setBrickDimensions({ height, width, mortar }));
  };

  render() {
    const { value, brickDimensionsPopup, staggerBricks } = this.props;
    const { formControls } = this.state;
    return (
      <div>
        <h2>Brick Dimensions</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Select
            handleChange={this.handleSelectChange}
            value={value}
            options={brickDimensions}
            custom
          />
          <span style={{ marginRight: 10 }}>Stagger Bricks</span>
          <input
            type="checkbox"
            name="staggerBricks"
            checked={staggerBricks}
            onChange={this.handleToggleStaggerBricks}
          />
        </div>
        {brickDimensionsPopup && (
          <StyledForm onSubmit={this.submitForm}>
            <div>
              <span>Brick Height</span>
              <input
                type="number"
                min="0"
                step="1"
                name="brickHeight"
                value={formControls.brickHeight.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <span>Brick Width</span>
              <input
                type="number"
                min="0"
                step="1"
                name="brickWidth"
                value={formControls.brickWidth.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <span>Brick Mortar</span>
              <input
                type="number"
                min="0"
                step="1"
                name="brickMortar"
                value={formControls.brickMortar.value}
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
