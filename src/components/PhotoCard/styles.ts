import styled from 'styled-components';

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  img {
    max-width: 100%;
    display: block;
    border-radius: 5px;
  }

  h5 {
    margin: 0;
    padding: 0;
  }
`;
