import styled from 'styled-components';
import { GrClearOption } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export const AuthContainer = styled.div`
    height: calc(100vh - 80px);
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    width: 600px;
    height: 500px;

    border: 2px solid #101522;
    border-radius: 10px;
    padding: 1rem;

    display: grid;
    align-items: center;

    @media screen and (max-width: 960px) {
        width: 300px;
        height: 250px;
    }
`;

export const FormGroup = styled.form`
    display: grid;
    gap: 10px;
    grid-template-rows: repeat(3, 1fr);
`;

export const Title = styled.h2`
    font-size: 2rem;
    text-align: center;
`;

export const InputGroup = styled.div`
    position: relative;

    @media screen and (min-width: 960px) {
        width: 75%;
        justify-self: center;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;

    padding: 0.5rem;

    border-radius: 5px;
`;

export const IconClear = styled(GrClearOption)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;

    cursor: pointer;

    &:hover {
        color: #101522;
    }
`;

export const BtnGroup = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;

    @media screen and (min-width: 960px) {
        width: 75%;
        justify-self: center;
    }
`;

export const Button = styled.button`
    height: 40px;

    cursor: pointer;

    background: #101522;
    border: none;
    border-radius: 7px;

    transition: all 0.5s ease;

    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;

    &:hover {
        color: #101522;
        background: #998355;
    }
`;

export const BtnLink = styled(Link)`
    text-decoration: none;

    color: #101522;
    font-weight: 700;
    font-size: 1rem;

    transition: all 0.5s ease;

    &:hover {
        color: #998355;
    }

    @media screen and (max-width: 960px) {
        font-size: 0.7rem;
    }
`;
