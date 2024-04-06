import React, {useState} from 'react';
import {ScreenWrapper, SortIconWrapper, RowContainer} from './styled';
import {SearchBar} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetListData,
  sortByName,
  updateModalModalVisibility,
  updateSearchList,
  updateSearchText,
} from 'state/actions';
import {FlatList} from 'react-native';
import {UsersData} from '@constants/userData';
import {sorting} from '@utils/common';
import {ListItem, AppModal} from '@components';
import {
  getListData,
  getModalVisibility,
  getSearchKey,
  getSearchText,
} from 'state/selectors';
import {ListHeader} from 'components/list-header';
import {APP_COLORS} from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [isSorted, setIsSorted] = useState<boolean>(false);
  const listData = useSelector(getListData);
  const searchText = useSelector(getSearchText);
  const keyUserSearch = useSelector(getSearchKey);
  const visbility = useSelector(getModalVisibility);
  const DataUserSort = sorting(UsersData);

  const handleSearch = (input: string) => {
    dispatch(updateSearchText(input));
    !input && dispatch(resetListData());
  };

  const onSearch = () => {
    setIsSorted(false);
    dispatch(
      updateSearchList({
        search: searchText,
      }),
    );
  };

  const handleSorting = () => {
    setIsSorted(true);
    dispatch(sortByName());
  };

  const renderItem = (item: allAnyTypes, index: number) => {
    const isNotTopTen =
      Object.keys(DataUserSort).indexOf(keyUserSearch) > 9 && index === 9;
    const isSearchedUser = isNotTopTen ? true : keyUserSearch === item;
    const rank =
      Object.keys(DataUserSort).indexOf(isNotTopTen ? keyUserSearch : item) + 1;
    return (
      <ListItem
        item={UsersData[isNotTopTen ? keyUserSearch : item]}
        rank={rank}
        isSearchedUser={isSearchedUser}
      />
    );
  };

  const closeModal = () => {
    dispatch(updateModalModalVisibility(false));
  };

  return (
    <ScreenWrapper>
      <SearchBar
        placeholder={'Enter Name Here'}
        onInputSearch={handleSearch}
        onPressSearch={onSearch}
      />
      <ScreenWrapper>
        <ListHeader />
        <RowContainer>
          <SortIconWrapper isSorted={isSorted} onPress={handleSorting}>
            <MaterialCommunityIcons
              name={'sort-alphabetical-ascending'}
              size={24}
              color={isSorted ? APP_COLORS.COLOR_PRIMARY : APP_COLORS.BLACK}
            />
          </SortIconWrapper>
        </RowContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={index => index.toString()}
          data={Object.keys(listData)}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </ScreenWrapper>
      <AppModal
        visible={visbility}
        message="This user name does not exist! Please specify an existing user name!"
        onClose={closeModal}
      />
    </ScreenWrapper>
  );
};
