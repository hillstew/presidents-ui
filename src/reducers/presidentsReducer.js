export const presidents = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRESIDENTS':
      return [...state, action.presidents];
    default:
      return state;
  }
};
