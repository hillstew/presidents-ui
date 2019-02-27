import { presidents } from '../presidentsReducer';
import * as actions from '../../actions';

describe('presidentsReducer', () => {
  it('should return the default state', () => {
    const result = presidents(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return the presidents array', () => {
    const expected = [{ name: 'DT' }, { name: 'BO' }];
    const result = presidents(undefined, actions.getPresidents(expected));
    expect(result).toEqual(expected);
  });
});
