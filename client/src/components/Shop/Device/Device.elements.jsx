import styled from 'styled-components';

export const Devices = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(6, 1fr);

    @media screen and (max-width: 960px) {
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Card = styled.div`
    width: 230px;
    border: 2px solid #101522;
    border-radius: 6px;
    padding: 8px;

    cursor: pointer;

    display: grid;
    justify-content: center;

    transition: all 0.5s ease;

    &:hover {
        background-color: #101522;
        color: #fff;
    }
`;

export const Image = styled.img`
    height: 200px;
`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`;

export const Description = styled.div`
    color: #808080;
`;

export const Rating = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: center;
    justify-self: end;
`;

export const Icon = styled.div`
    width: 16px;
    height: 16px;
`;

export const Name = styled.div`
    font-weight: 700;
`;
