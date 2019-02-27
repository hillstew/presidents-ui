import { isLoading } from '../loadingReducer';
import * as actions from '../../actions';

describe('loadingReducer', () => {
  it('should return the default state', () => {
    const result = isLoading(undefined, {});
    expect(result).toEqual(true);
  });

  it('should return the boolean for loading', () => {
    const result = isLoading(true, actions.setLoading(false));
    expect(result).toEqual(false);
  });
});
