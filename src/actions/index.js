export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setLoading = bool => ({
  type: 'SET_LOADING',
  bool
});

export const getPresidents = presidents => ({
  type: 'GET_PRESIDENTS',
  presidents
});
