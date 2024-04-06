import React, {FC} from 'react';
import {Container, AppText} from './styled';

export const ListItem: FC<IListItem> = ({item, rank, isSearchedUser}) => {
  // console.log('item', item?.name);
  return (
    <Container>
      <AppText isSearchedUser={isSearchedUser}>{item?.name}</AppText>
      <AppText>{rank}</AppText>
      <AppText>{item?.bananas}</AppText>
    </Container>
  );
};
