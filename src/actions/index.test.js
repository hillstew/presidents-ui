import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_ERROR', () => {
    const error = 'too many assholes to fetch';
    const expectedAction = {
      type: 'SET_ERROR',
      error: 'too many assholes to fetch'
    };

    const result = actions.setError(error);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_LOADING', () => {
    const loading = false;
    const expectedAction = {
      type: 'SET_LOADING',
      loading: false
    };

    const result = actions.setLoading(loading);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_PRESIDENTS', () => {
    const presidents = [
      {
        number: 1,
        president: 'FDR',
        birth_year: 1921,
        death_year: 1994,
        took_office: 1956,
        left_office: 1964,
        party: 'the best party'
      }
    ];

    const expectedAction = {
      type: 'GET_PRESIDENTS',
      presidents: [
        {
          number: 1,
          president: 'FDR',
          birth_year: 1921,
          death_year: 1994,
          took_office: 1956,
          left_office: 1964,
          party: 'the best party'
        }
      ]
    };

    const result = actions.getPresidents(presidents);

    expect(result).toEqual(expectedAction);
  });
});
