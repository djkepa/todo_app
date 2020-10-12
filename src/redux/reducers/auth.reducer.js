import * as actions from '../actions/auth.types';

const initialState = {
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return { ...state, loading: true };
    case actions.AUTH_END:
      return { ...state, loading: false };
    case actions.AUTH_SUCCESS:
      return { ...state, error: false };
    case actions.AUTH_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
};
