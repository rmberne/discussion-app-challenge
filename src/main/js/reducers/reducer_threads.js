import _ from "lodash";
import {
  DELETE_THREAD, FETCH_THREAD, FETCH_THREADS,
  UPDATE_THREAD
} from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_THREAD:
      return _.omit(state, action.payload);
    case UPDATE_THREAD:
      return {...state, [action.payload.data.id]: action.payload.data};
    case FETCH_THREAD:
      return {...state, [action.payload.data.id]: action.payload.data};
    case FETCH_THREADS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}