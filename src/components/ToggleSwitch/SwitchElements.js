import styled from 'styled-components';

export const SwitchContainer = styled.div`
    height: 100px;
    width: 22%;
    padding-left: 90px;
    padding-top: 78px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    @media screen and (max-width: 820px) {
        width: 71%;
        height: 0vh;
        padding-top: 2rem;
        padding-left: 1rem;
        margin-bottom: 2.5rem;
      }
`;

export const SwitchH = styled.h4`
    color: #8A8A8A;
    font-size: 1rem;
    font-family: 'Lato';
    font-weight: bold;
`;