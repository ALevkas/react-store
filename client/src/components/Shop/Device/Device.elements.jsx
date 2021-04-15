import styled from 'styled-components';

export const Devices = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(6, 1fr);

    @media screen and (min-width: 0px) and (max-width: 960px) {
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 960px) and (max-width: 1366px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1366px) and (max-width: 1768px) {
        grid-template-columns: repeat(4, 1fr);
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

    position: relative;
`;

export const Icon = styled.div`
    width: 16px;
    height: 16px;
`;

export const Name = styled.div`
    font-weight: 700;
`;

export const Container = styled.div`
    width: 80%;
    margin: 25px auto;
`;

export const Device = styled.div`
    border: 2px solid #101522;
    border-radius: 6px;

    display: grid;
    justify-content: space-around;
    grid-template-columns: 0.5fr 0.5fr 2fr;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const RatingDevice = styled.div`
    position: relative;
`;

export const InfoDevice = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
`;

export const RatingNumber = styled.div`
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const NameDevice = styled(Name)`
    display: grid;
    align-items: center;
    text-align: center;
`;

export const CardDevice = styled.div`
    width: 50%;
    height: 50%;

    padding: 8px;

    display: grid;
    justify-content: center;

    align-self: center;
    justify-self: center;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 100%;

        border: none;
        gap: 10px;
    }
`;

export const Price = styled.div`
    font-weight: bold;
    text-align: center;
`;

export const AddBasket = styled.button`
    background-color: #fff;
    border: 2px solid #101522;
    border-radius: 6px;
    color: #101522;

    padding: 6px;

    cursor: pointer;

    transition: all 0.5s ease;

    &:hover {
        background-color: #101522;
        border: 2px solid #101522;
        color: #fff;
    }
`;

export const Characteristics = styled.div`
    grid-template-columns: 1fr;

    @media screen and (max-width: 960px) {
        justify-items: normal;
    }
`;

export const Title = styled.h2`
    margin: 25px 0;
`;

export const Attribute = styled.div`
    height: 45px;
    padding: 6px;
    background-color: ${({ index }) => (index % 2 === 0 ? '#667291' : '#fff')};
    color: ${({ index }) => (index % 2 === 0 ? '#fff' : '#101522')};
    cursor: pointer;

    display: grid;
    align-items: center;
`;
