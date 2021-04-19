import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 25px auto;

    display: grid;
    gap: 15px;
`;

export const Button = styled.button`
    justify-self: center;

    cursor: pointer;

    width: 100%;
    height: 75px;

    background-color: #fff;
    color: #101522;

    transition: all 0.3s ease;

    font-weight: 700;
    font-size: 1.5rem;

    border-radius: 6px;

    &:hover {
        background-color: #101522;
        color: #fff;
    }

    @media (min-width: 960px) {
        width: 50%;
    }
`;
