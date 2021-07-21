import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from '../actions/auth';

const initialState = {
  token: null,
  email: null,
  userId: null,
  roles: null,
  didTryAutoLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        email: action.userId,
        userId: action.token,
        roles: action.userId,
        didTryAutoLogin: true
      };
      case SET_DID_TRY_AL:
        return {
          ...state,
          didTryAutoLogin: true
        };
      case LOGOUT:
        return {
          ...initialState,
          didTryAutoLogin: true
        };
    default:
      return state;
  }
};
