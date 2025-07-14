import { User } from "./types";

export const fetchUsersRequest = () => ({ type: "FETCH_USERS_REQUEST" });
export const fetchUsersSuccess = (users: User[]) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});
export const fetchUsersFailure = (error: string) => ({
  type: "FETCH_USERS_FAILURE",
  payload: error,
});

export const setSelectedUser = (user: User) => ({
  type: "SET_SELECTED_USER",
  payload: user,
});
export const toggleFavoriteUser = (user: User) => ({
  type: "TOGGLE_FAVORITE_USER",
  payload: user,
});
