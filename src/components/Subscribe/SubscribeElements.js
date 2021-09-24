import styled from 'styled-components';

export const SubscribeContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  aling-items: center;
  background: #fafafa;
  fant-family: 'Lato';
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  aling-items: center;
  padding-bottom: 5rem;
  transition: 0.3s ease-in-out;

  @media (max-width: 820px) {
    width: 70%;
  }
`;

export const Form = styled.form `
  background: #F5F5F5;
  border-radius: 30rem;
  border-width: 0;
  display: flex;
  justify-content: space-between;
  aling-items: center;
  width: 550px;
  height: 55px;
  &:focus-visible {
    outline: none;
}
`;

export const Button = styled.button`
  background: #FF944D;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 49rem;
  margin: 0.25rem 0.5rem 0.25rem 0;
  cursor: pointer;
  width: 20%;
  border-width: 0;
  &:hover {
    transition: 0.2s ease-out;
    color: #535353;
  }
  transition: 0.3s ease-in-out;

  @media (max-width: 820px) {
    font-size: 0.75rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
`;

export const Input = styled.input`
  background: #F5F5F5;
  font-size: 0.75rem;
  font-weight: lighter;
  margin-left: 2rem;
  border-radius: 49rem;
  color: #505050;
  border-width: 0;
  margin-top: 1rem;
  width: 50%;
  height: 50%;
  &:focus {
    border-width: 0;
  }
  &:focus-visible {
    border-width: 0;
    border-color: none;
  }
`;