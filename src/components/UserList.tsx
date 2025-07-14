import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredUsers, selectFavorites } from "../store/users/selectors";
import { toggleFavoriteUser } from "../store/users/actions";
import styled from "styled-components";
import { RootState } from "../store";

const SearchInput = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const UserCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

const Spinner = styled.div`
  border: 4px solid #ccc;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type UserListProps = {
  onUserClick: (id: number, name: string) => void;
};

const UserList = ({ onUserClick }: UserListProps) => {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const favorites = useSelector(selectFavorites);
  const [searchTerm, setSearchTerm] = useState("");
  const loading = useSelector((state: RootState) => state.users.loading);

  return (
    <>
      <SearchInput
        placeholder="Buscar por nome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <Spinner />
      ) : (
        users
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user) => (
            <UserCard
              key={user.id}
              onClick={() => onUserClick(user.id, user.name)}
            >
              <strong>
                {user.name} - {user.username}
              </strong>
              <p>E-mail: {user.email}</p>
              <p>Telefone: {user.phone}</p>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleFavoriteUser(user));
                }}
              >
                {favorites.some((fav) => fav.id === user.id)
                  ? "✖ Remover"
                  : "★ Favoritar"}
              </Button>
            </UserCard>
          ))
      )}
    </>
  );
};

export default UserList;
