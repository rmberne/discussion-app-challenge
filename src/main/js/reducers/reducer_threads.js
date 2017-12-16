import _ from "lodash";
import {
  FETCH_THREADS,
  FETCH_THREAD,
  UPDATE_THREAD
} from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_THREAD:
      return _.omit(state, action.payload);
    case FETCH_THREAD:
      return {...state, [action.payload.data.id]: action.payload.data};
    case FETCH_THREADS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}