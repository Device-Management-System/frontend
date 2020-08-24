import styled from 'styled-components';

export const UpdateProfileContainer = styled.section`
  width: 100%;
  height: auto;
  background: #f8f8f8;
  padding: 5rem;
  border-radius: 0.8rem;

  h4 {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 3.4rem;
    text-align: center;
    margin-bottom: 4rem;
  }
`;

export const UpdateProfileWrapper = styled.div`
  width: 1140px;
  max-width: 1140px;
  margin: 0 auto;
`;

export const UpdateProfileDesc = styled.p`
  text-align: center;
  font-size: 1.6rem;
`;

export const UpdateProfileForm = styled.form`
  width: 53.9rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const UpdateProfileTop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 21px;
  margin: 0;
`;
