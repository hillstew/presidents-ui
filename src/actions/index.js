export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const getPresidents = presidents => ({
  type: 'GET_PRESIDENTS',
  presidents
});
