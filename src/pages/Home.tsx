import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import UserDetails from "../components/UserDetails";
import { fetchUsersRequest } from "../store/users/actions";
import { FavoritesList } from "../components/FavoritesList";
import UserList from "../components/UserList";
import { useSelector } from "react-redux";
import { selectFavorites } from "../store/users/selectors";
import { ConfirmModal } from "../components/ConfirmModal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
`;

const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 1rem;
  font-weight: bold;
  color: ${({ active }) => (active ? "#007bff" : "#555")};
  border-bottom: ${({ active }) => (active ? "3px solid #007bff" : "none")};
  cursor: pointer;
`;

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<
    "usuarios" | "detalhes" | "favoritos"
  >("usuarios");
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingUserId, setPendingUserId] = useState<number | null>(null);
  const [pendingUserName, setPendingUserName] = useState<string>("");

  const favorites = useSelector(selectFavorites);
  const favoriteCount = favorites.length;

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleUserClick = (id: number, name: string) => {
    setPendingUserId(id);
    setPendingUserName(name);
    setShowModal(true);
  };

  return (
    <Container>
      <Card>
        <TabHeader>
          <TabButton
            active={activeTab === "usuarios"}
            onClick={() => setActiveTab("usuarios")}
          >
            Usuários
          </TabButton>
          <TabButton
            active={activeTab === "detalhes"}
            onClick={() => setActiveTab("detalhes")}
          >
            Detalhes
          </TabButton>
          <TabButton
            active={activeTab === "favoritos"}
            onClick={() => setActiveTab("favoritos")}
          >
            Favoritos {favoriteCount > 0 && `(${favoriteCount})`}
          </TabButton>
        </TabHeader>

        {activeTab === "usuarios" && <UserList onUserClick={handleUserClick} />}

        {activeTab === "detalhes" && <UserDetails userId={selectedUserId} />}

        {activeTab === "favoritos" && <FavoritesList />}
      </Card>
      {showModal && (
        <ConfirmModal
          isOpen={showModal}
          userName={pendingUserName}
          onConfirm={() => {
            if (pendingUserId !== null) {
              setSelectedUserId(pendingUserId);
              setActiveTab("detalhes");
            }
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </Container>
  );
};

export default Home;
