import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

type UserDetailsProps = {
  userId: number | null;
};

const Section = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

const Label = styled.span`
  font-weight: bold;
`;

const UserDetails = ({ userId }: UserDetailsProps) => {
  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === userId)
  );

  if (!user) return <p>Nenhum usuário selecionado.</p>;

  return (
    <div>
      <h2>Detalhes de {user.name}</h2>

      <Section>
        <h4>Informações Pessoais</h4>
        <p>
          <Label>Nome:</Label> {user.name}
        </p>
        <p>
          <Label>Nome Social:</Label> {user.username}
        </p>
        <p>
          <Label>E-mail:</Label> {user.email}
        </p>
        <p>
          <Label>Telefone:</Label> {user.phone}
        </p>
        <p>
          <Label>Website:</Label>{" "}
          <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </Section>

      <Section>
        <h4>Endereço</h4>
        <p>
          <Label>Rua:</Label> {user.address.street}
        </p>
        <p>
          <Label>Complemento:</Label> {user.address.suite}
        </p>
        <p>
          <Label>Cidade:</Label> {user.address.city}
        </p>
        <p>
          <Label>CEP:</Label> {user.address.zipcode}
        </p>
        <p>
          <Label>Geo:</Label> Lat: {user.address.geo.lat}, Lng:{" "}
          {user.address.geo.lng}
        </p>
      </Section>

      <Section>
        <h4>Empresa</h4>
        <p>
          <Label>Nome:</Label> {user.company.name}
        </p>
        <p>
          <Label>Slogan:</Label> "{user.company.catchPhrase}"
        </p>
        <p>
          <Label>Atuação:</Label> {user.company.bs}
        </p>
      </Section>
    </div>
  );
};

export default UserDetails;
