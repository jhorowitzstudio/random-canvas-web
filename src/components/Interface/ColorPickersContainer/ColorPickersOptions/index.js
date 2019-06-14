/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import FilePreview from './FilePreview';
import MyDropzone from './MyDropzone';
import { removeFromFiles, addToFiles } from '../../../../actions';
// import styles from './styles'

class ColorPickersContainer extends React.Component {
  removeHandler = ({ index }) => {
    const { dispatch } = this.props;
    dispatch(removeFromFiles({ index }));
  };

  handleUpload = ({ blob }) => {
    const { dispatch } = this.props;
    const name = 'image';
    dispatch(addToFiles({ file: { name, blob } }));
  };

  render() {
    const { files } = this.props;
    console.log(files);
    return (
      <div>
        <h2>Background Color</h2>
        <ColorPicker
          colorName="borderColor"
          header="Border Color"
          {...this.props}
        />
        <MyDropzone handleUpload={this.handleUpload} />
        <div style={{ maxWidth: 800 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
              gridColumnGap: 0,
              gridRowGap: 15
            }}
          >
            {files.map((file, index) => {
              return (
                <div key={index + file} style={{border: '1px solid grey'}}>
                  <FilePreview
                    index={index}
                    key={index + file}
                    file={file}
                    {...this.props}
                  />
                  <button
                    type="submit"
                    style={{ width: '100%' }}
                    onClick={() => this.removeHandler({ index })}
                  >
                    delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  firstColor,
  secondColor,
  borderColor,
  colorMode,
  colorHueMode
}) => ({
  firstColor,
  secondColor,
  borderColor,
  colorMode,
  colorHueMode
});

export default connect(mapStateToProps)(ColorPickersContainer);
