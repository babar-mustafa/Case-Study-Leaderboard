import {
  APP_UPDATE_SEARCHED_DATA,
  APP_UPDATE_SEARCH_TEXT,
  APP_UPDATE_SEARCH_KEY,
  APP_UPDATE_MODAL_VISIBILITY,
  SORT_BY_NAME,
} from 'state/action-types/app';
import {RESET_REDUCER} from '../action-types/common';
import {UsersData} from 'constants/userData';
import {sortAlphabetically, sorting} from 'utils/common';

const INITIAL_STATE = {
  data: {
    listdata: UsersData,
    searchText: '',
    searchKey: '',
    modalVisibility: false,
  },
};

const appReducer = (state = INITIAL_STATE, action: IAction): allAnyTypes => {
  switch (action.type) {
    case APP_UPDATE_SEARCHED_DATA: {
      const {search} = action?.payload;
      const newData = Object.keys(UsersData).reduce(function (
        item: DataUserList,
        key,
      ) {
        const name = UsersData[key].name.toLowerCase();
        if (name.indexOf(search.toLowerCase()) > -1) {
          item[key] = UsersData[key];
        }
        return item;
      },
      {});
      const isEmpty = Object.keys(newData).length === 0;
      if (isEmpty) {
        return {
          ...state,
          data: {
            ...state.data,
            modalVisibility: true,
          },
        };
      }
      const slicedDataUser = Object.fromEntries(
        Object.entries(sorting(UsersData)).slice(0, 10),
      );
      const slicedUserSearchSort = Object.fromEntries(
        Object.entries(sorting(newData)).slice(0, 1),
      );

      const searchKey = Object.keys(slicedUserSearchSort)[0];
      return {
        ...state,
        data: {
          ...state.data,
          listdata: slicedDataUser,
          searchKey: searchKey,
        },
      };
    }
    case APP_UPDATE_SEARCH_TEXT: {
      return {
        ...state,
        data: {
          ...state.data,
          searchText: action.payload,
        },
      };
    }
    case APP_UPDATE_SEARCH_KEY: {
      return {
        ...state,
        data: {
          ...state.data,
          searchKey: action.payload,
        },
      };
    }
    case APP_UPDATE_MODAL_VISIBILITY: {
      return {
        ...state,
        data: {
          ...state.data,
          modalVisibility: action.payload,
        },
      };
    }
    case SORT_BY_NAME:
      const slicedDataUser = Object.fromEntries(
        Object.entries(sortAlphabetically(state?.data?.listdata)),
      );
      return {
        ...state,
        data: {
          ...state.data,
          listdata: slicedDataUser,
        },
      };
    case RESET_REDUCER: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};

export {appReducer};
