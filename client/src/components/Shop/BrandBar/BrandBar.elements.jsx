import styled from 'styled-components';

export const Brands = styled.div`
    display: grid;
    grid-column: 2/3;

    grid-template-columns: repeat(auto-fill, minmax(75px, 100px));
    gap: 30px;
    @media screen and (max-width: 960px) {
        grid-column: 1/3;
        grid-row: 2/3;
        justify-content: center;
    }
`;
export const Card = styled.div`
    border: 1px solid #101522;
    border-radius: 7px;

    cursor: pointer;

    text-align: center;
    padding: 7px;

    transition: all 0.5s ease;

    background-color: ${({ active }) => (active ? '#101522' : '#fff')};
    color: ${({ active }) => (active ? '#fff' : '#101522')};

    &:hover {
        background-color: #101522;
        color: #fff;
    }
`;
