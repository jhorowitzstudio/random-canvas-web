import React from 'react';

export default props => {
  const {
    noLeftMargin,
    handleChange,
    value,
    options,
    disabled,
    custom = false
  } = props;
  return (
    <select
      style={noLeftMargin ? { margin: '10px 10px 10px 0' } : { margin: 10 }}
      disabled={disabled}
      value={value}
      onChange={handleChange}
    >
      {Object.keys(options).map(name => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
      {custom && (
        <option key="custom" value="Custom...">
          Custom...
        </option>
      )}
    </select>
  );
};
