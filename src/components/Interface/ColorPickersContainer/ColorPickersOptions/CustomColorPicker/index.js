import React from 'react';
import { SketchPicker } from 'react-color';
import { editColorInArray } from '../../../../../actions';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      backgroundColor: ''
    };
  }

  componentDidMount() {
    const { color } = this.props;
    this.setState({ backgroundColor: color });
  }

  handleClick = () => {
    const { displayColorPicker, backgroundColor } = this.state;
    if (displayColorPicker) {
      const { index, dispatch } = this.props;
      dispatch(editColorInArray({ index, color: backgroundColor }));
    }
    this.setState(prevState => ({
      displayColorPicker: !prevState.displayColorPicker
    }));
  };

  handleClose = () => {};

  handleOnChangeComplete = color => {
    this.setState({ backgroundColor: color.hex });
  };

  render() {
    const { backgroundColor } = this.state;
    const styles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: backgroundColor
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
      },
      popover: {
        position: 'absolute',
        zIndex: '2'
      },
      cover: {
        display: 'none',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    };
    const { displayColorPicker } = this.state;

    return (
      <div>
        <button type="submit" style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </button>
        {displayColorPicker ? (
          <div style={styles.popover}>
            <button
              type="submit"
              style={styles.cover}
              onClick={this.handleClose}
            >Save</button>
            <SketchPicker
              color={backgroundColor}
              onChangeComplete={this.handleOnChangeComplete}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

// export default class Component extends React.Component {
//   render() {
//     // eslint-disable-next-line react/destructuring-assignment
//     const color = this.props[this.props.colorName];
//     const { header } = this.props;
//     return (
//       <StyledPhotoshopPickerDivContainer>
//         <PhotoshopPicker
//           header={header}
//           color={color}
//           onChangeComplete={this.handleOnChangeComplete}
//         />
//       </StyledPhotoshopPickerDivContainer>
//     );
//   }
// }
