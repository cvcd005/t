import { combineReducers } from "redux";
import {
  GET_LIST,
  REQUESTED_LOAD_LIST,
  REQUESTED_SUCCEEDED_LIST,
  REQUESTED_FAILED_LIST,
  GET_ASTR,
  REQUESTED_LOAD_ASTR,
  REQUESTED_SUCCEEDED_ASTR,
  REQUESTED_FAILED_ASTR,
} from "./actions";

import { RequestState, IList, ISAstr } from "./types";

const list = (
  state: IList = { data: [], requestState: RequestState.PENDING },
  action
) => {
  switch (action.type) {
    case GET_LIST:
      return state;
    case REQUESTED_SUCCEEDED_LIST:
      return { data: action.payload, requestState: RequestState.SUCCESS };
    case REQUESTED_FAILED_LIST:
      return { data: [], requestState: RequestState.ERROR };
    case REQUESTED_LOAD_LIST:
      return { data: state.data, requestState: RequestState.LOADING };
    default:
      return state;
  }
};

const astr = (
  state: { data: ISAstr; requestState: RequestState } = {
    data: null,
    requestState: RequestState.PENDING,
  },
  action
) => {
  switch (action.type) {
    case GET_ASTR:
      return state;
    case REQUESTED_SUCCEEDED_ASTR:
      return { data: action.payload, requestState: RequestState.SUCCESS };
    case REQUESTED_FAILED_ASTR:
      return { data: {}, requestState: RequestState.ERROR };
    case REQUESTED_LOAD_ASTR:
      return { data: state.data, requestState: RequestState.LOADING };
    default:
      return state;
  }
};

export default combineReducers({
  list,
  astr,
});
