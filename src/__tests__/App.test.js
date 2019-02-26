import { mapStateToProps } from '../containers/App';
import { mapDispatchToProps } from '../containers/App';
import { getPresidents, setLoading, setError } from '../actions';

describe('mapStateToProps', () => {
  it('should return an array of presidents, isLoading, and error', () => {
    const mockState = {
      presidents: [{}, {}, {}],
      isLoading: true,
      hasErrored: 'Hello, I am an error',
      extraExtra: 'readAllAboutIt'
    };

    const expectedState = {
      presidents: [{}, {}, {}],
      isLoading: true,
      hasErrored: 'Hello, I am an error'
    };

    const props = mapStateToProps(mockState);

    expect(props).toEqual(expectedState);
  });
});

describe('mapDispatchToProps', () => {
  it('should call getPresidents dispatch when getPresidents is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getPresidents([{}, {}, {}]);
    const props = mapDispatchToProps(mockDispatch);
    props.getPresidents([{}, {}, {}]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call setLoading dispatch when setLoading is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setLoading(true);
    const props = mapDispatchToProps(mockDispatch);
    props.setLoading(true);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call setError dispatch when setError is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setError('hi');
    const props = mapDispatchToProps(mockDispatch);
    props.setError('hi');
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
