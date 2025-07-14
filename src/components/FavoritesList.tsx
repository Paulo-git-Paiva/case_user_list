import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteUser } from '../store/users/actions';
import { selectFavorites } from '../store/users/selectors';
import styled from 'styled-components';

const UserCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  background-color: #dc3545;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

export const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  if (favorites.length === 0) return <p>Nenhum favorito.</p>;

  return (
    <>
      {favorites.map((user) => (
        <UserCard key={user.id}>
          <strong>{user.name} - {user.username}</strong>
          <p>Email: {user.email}</p>
          <p>Telefone: {user.phone}</p>
          <Button onClick={() => dispatch(toggleFavoriteUser(user))}>
            Remover
          </Button>
        </UserCard>
      ))}
    </>
  );
};
