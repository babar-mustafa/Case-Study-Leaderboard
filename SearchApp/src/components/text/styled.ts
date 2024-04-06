import styled, {css} from 'styled-components/native';
import {APP_COLORS} from 'constants/common';

export const StyledText = styled.Text<IText>`
  color: ${APP_COLORS.BLACK};
  font-size: 12px;
  ${({color}) =>
    color &&
    css`
      color: ${color};
    `}
  ${({size}) =>
    size &&
    css`
      font-size: ${size}px;
    `}
`;
