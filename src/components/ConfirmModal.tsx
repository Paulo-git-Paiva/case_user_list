import styled from "styled-components";

type ConfirmModalProps = {
  isOpen: boolean;
  userName: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ primary }) => (primary ? "#007bff" : "#ccc")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  border: none;
  border-radius: 4px;
  margin: 0 0.5rem;
  cursor: pointer;
`;

export const ConfirmModal = ({
  isOpen,
  userName,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContent>
        <h3>Visualizar detalhes</h3>
        <p>
          Deseja ver os detalhes de <strong>{userName}</strong>?
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Button primary onClick={onConfirm}>
            Ver detalhes
          </Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </div>
      </ModalContent>
    </Overlay>
  );
};
