import axios from "axios";
import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());

  axios
    .get("https://jsonplaceholder.typicode.com/users11")
    .then((response) => {
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      dispatch(fetchUsersFailed(error.message));
    });
};

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error,
});
