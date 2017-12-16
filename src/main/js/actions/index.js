import axios from "axios";

export const FETCH_THREADS = "fetch_threads";
export const FETCH_THREAD = "fetch_thread";
export const CREATE_THREAD = "create_thread";
export const UPDATE_THREAD = "update_thread";
export const DELETE_THREAD = "delete_thread";

const ROOT_URL = "http://localhost:8080";

export function fetchThreads() {
  const request = axios.get(`${ROOT_URL}/threads`);

  return {
    type: FETCH_THREADS,
    payload: request
  };
}

export function createThread(values, callback) {
  const request = axios
  .post(`${ROOT_URL}/threads`, values)
  .then(() => callback());

  return {
    type: CREATE_THREAD,
    payload: request
  };
}

export function fetchThread(id) {
  const request = axios.get(`${ROOT_URL}/threads/${id}`);

  return {
    type: FETCH_THREAD,
    payload: request
  };
}

export function updateThread(values) {
  const request = axios
  .put(`${ROOT_URL}/threads`, values);

  return {
    type: UPDATE_THREAD,
    payload: request
  };
}

export function deleteThread(id, callback) {
  axios.delete(`${ROOT_URL}/threads/${id}`)
  .then(() => callback());

  return {
    type: DELETE_THREAD,
    payload: id
  };
}