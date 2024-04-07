jest.mock('react-native-screens', () => ({
  ...jest.requireActual('react-native-screens'),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../src/state/actions', () => ({
  getCategoriesAction: jest.fn(),
  updateTotalEventAmountAction: jest.fn(),
}));
