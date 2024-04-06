import React, {FC} from 'react';
import {StyledText} from './styled';

export const AppText: FC<IText> = ({color, size, children}) => {
  return (
    <StyledText color={color} size={size}>
      {children}
    </StyledText>
  );
};
