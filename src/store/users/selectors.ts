import { RootState } from '../index';

export const selectUsers = (state: RootState) => state.users.users;
export const selectFavorites = (state: RootState) => state.users.favorites;

export const selectFilteredUsers = selectUsers;
