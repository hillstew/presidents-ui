import { hasErrored } from '../errorReducer';
import * as actions from '../../actions';

describe('errorReducer', () => {
  it('should return the default state', () => {
    const result = hasErrored(undefined, {});
    expect(result).toEqual('');
  });

  it('should return thr error', () => {
    const expected = 'Fancy error';
    const result = hasErrored(undefined, actions.setError('Fancy error'));
    expect(result).toEqual(expected);
  });
});
