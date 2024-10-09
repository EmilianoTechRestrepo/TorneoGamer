import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAIL,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAIL,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAIL,
  UPDATE_PAYMENT_STATUS_SUCCESS,
  UPDATE_PAYMENT_STATUS_FAIL,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
} from "../Actions/actions-types";

const initialState = {
  adminInfo: null,
  token: null,
  groups: [],
  group: null,
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        adminInfo: action.payload.admin,
        token: action.payload.token,
        error: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        groups: [...state.groups, action.payload.group],
        error: null,
      };
    case CREATE_GROUP_FAIL:
      return { ...state, error: action.payload };

    case FETCH_GROUPS_SUCCESS:
      return { ...state, groups: action.payload, error: null };
    case FETCH_GROUPS_FAIL:
      return { ...state, error: action.payload };

    case FETCH_GROUP_SUCCESS:
      return { ...state, group: action.payload, error: null };
    case FETCH_GROUP_FAIL:
      return { ...state, error: action.payload };

      case 'UPDATE_PAYMENT_STATUS_SUCCESS':
        return {
          ...state,
          groups: state.groups.map(group =>
            group.id === action.payload.id
              ? { ...group, paymentStatus: action.payload.paymentStatus }
              : group
          ),
        };
    case UPDATE_PAYMENT_STATUS_FAIL:
      return { ...state, error: action.payload };

    case DELETE_GROUP_SUCCESS:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.payload),
        error: null,
      };
    case DELETE_GROUP_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default rootReducer;
