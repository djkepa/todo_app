import * as actions from '../actions/auth.types';

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false,
  },
};

// HELPER FUNCTIONS

const authStart = (state) => {
  return { ...state, loading: true };
};

const authEnd = (state) => {
  return { ...state, loading: false };
};

const authFail = (state, payload) => {
  return { ...state, error: payload };
};

const authSuccess = (state) => {
  return { ...state, error: false };
};

const verifyStart = (state) => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: true },
  };
};

const verifySuccess = (state) => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: false },
  };
};

const verifyFail = (state, payload) => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: payload },
  };
};

const recoveryStart = (state) => {
  return {
    ...state,
    recoverPassword: { ...state.recoverPassword, loading: true },
  };
};

const recoverySuccess = (state) => {
  return {
    ...state,
    recoverPassword: {
      ...state.recoverPassword,
      loading: false,
      error: false,
    },
  };
};

const recoveryFail = (state, payload) => {
  return {
    ...state,
    recoverPassword: {
      ...state.recoverPassword,
      loading: false,
      error: payload,
    },
  };
};

const cleanUp = (state) => {
  return {
    ...state,
    error: null,
    loading: false,
    verifyEmail: {
      ...state.verifyEmail,
      loading: false,
      error: null,
    },
    recoverPassword: {
      ...state.recoverPassword,
      loading: false,
      error: null,
    },
  };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CLEAN_UP:
      return cleanUp(state);

    case actions.AUTH_START:
      return authStart(state);

    case actions.AUTH_END:
      return authEnd(state);

    case actions.AUTH_FAIL:
      return authFail(state, payload);

    case actions.AUTH_SUCCESS:
      return authSuccess(state);

    case actions.VERIFY_START:
      return verifyStart(state);

    case actions.VERIFY_SUCCESS:
      return verifySuccess(state);

    case actions.VERIFY_FAIL:
      return verifyFail(state, payload);

    case actions.RECOVERY_START:
      return recoveryStart(state);

    case actions.RECOVERY_SUCCESS:
      return recoverySuccess(state);

    case actions.RECOVERY_FAIL:
      return recoveryFail(state, payload);

    default:
      return state;
  }
};
