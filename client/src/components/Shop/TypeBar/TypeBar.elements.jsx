import styled from 'styled-components';

export const TypeGroup = styled.div`
    border: 2px solid #101522;
    border-radius: 6px;

    @media screen and (max-width: 960px) {
        grid-column: 1/3;
    }
`;

export const TypeItem = styled.div`
    border-bottom: 1px solid #101522;

    padding: 10px;

    cursor: pointer;

    transition: all 0.3s ease;

    background-color: ${({ active }) => (active ? '#101522' : '#fff')};
    color: ${({ active }) => (active ? '#fff' : '#101522')};

    &:last-child {
        border: none;
    }

    &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &:hover {
        background-color: #101522;
        color: #fff;
    }
`;
