/* eslint-disable react/prop-types */
import React from 'react';

const Text = ({
  text, color, fontSize, fontWeight, marginLeft, marginRight, marginTop, marginBottom,
}) => (
  <p
    style={{
      color,
      fontSize,
      fontWeight,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    }}
  >
    {text}
  </p>
);

export default Text;
