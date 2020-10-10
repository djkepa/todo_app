import React from 'react';
import { Heading1, Heading2, Heading3, Heading4 } from './heading.styles';

const Heading = ({ children, color, noMargin, bold, size }) => {
  if (size === 'h1')
    return (
      <Heading1 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Heading1>
    );

  if (size === 'h2')
    return (
      <Heading2 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Heading2>
    );

  if (size === 'h3')
    return (
      <Heading3 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Heading3>
    );

  if (size === 'h4')
    return (
      <Heading4 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Heading4>
    );
};

export default Heading;
