import React from 'react';

export default props => {
  const {
    file: { blob }
  } = props;
  return (
    <div width="100px" height="100px">
      <img
        width="100px"
        height="100px"
        alt="preview"
        src={blob}
      />
    </div>
  );
};
