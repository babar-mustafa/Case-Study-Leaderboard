import React, {FC} from 'react';
import {SearchBarContainer, SearchInput, SearchButton} from './styled';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {APP_COLORS} from 'constants/common';
import {AppText} from 'components/text';

export const SearchBar: FC<ISearchBar> = ({
  placeholder,
  onPressSearch,
  onInputSearch,
}) => {
  const handleChange = (text: string) => {
    if (typeof onInputSearch === 'function') {
      onInputSearch(text);
    }
  };
  return (
    <SearchBarContainer>
      <EvilIcons name={'search'} size={24} color={APP_COLORS.BLACK} />
      <SearchInput placeholder={placeholder} onChangeText={handleChange} />
      <SearchButton onPress={onPressSearch}>
        <AppText color={APP_COLORS.WHITE} size={12}>
          {'Search'}
        </AppText>
      </SearchButton>
    </SearchBarContainer>
  );
};
