export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo:{
    lat: string;
    lng: string;
  }
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export interface UsersState {
  loading: boolean;
  users: User[];
  favorites: User[];
  selectedUser: User | null;
  error: string | null;
}