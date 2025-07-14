import { UsersState } from "./types";

const initialState: UsersState = {
  loading: false,
  users: [],
  favorites: [],
  selectedUser: null,
  error: null,
};

export const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_USERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.payload };
    case "TOGGLE_FAVORITE_USER":
      const user = action.payload;
      const exists = state.favorites.some((u) => u.id === user.id);
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter((u) => u.id !== user.id)
          : [...state.favorites, user],
      };
    default:
      return state;
  }
};
