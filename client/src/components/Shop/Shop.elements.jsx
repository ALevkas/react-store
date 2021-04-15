import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: 50px auto;

    display: grid;
    grid-template-columns: 1fr 9fr;

    gap: 1rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;
