import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 25px auto;

    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Button = styled.button`
    cursor: pointer;
    height: 75px;

    background-color: #fff;
    color: #101522;

    transition: all 0.3s ease;

    font-weight: 700;
    font-size: 1.5rem;

    border-radius: 6px;

    margin: 0 auto;

    &:hover {
        background-color: #101522;
        color: #fff;
    }

    @media (min-width: 960px) {
        width: 50%;
    }
`;
