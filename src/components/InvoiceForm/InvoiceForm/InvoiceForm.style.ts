import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  overflow-y: scroll;
  padding: 0 10px;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  column-gap: 4rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
