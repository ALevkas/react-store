import styled from 'styled-components';

export const Modal = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: rgba(0, 0, 0, 0.4);

    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #fff;

    padding: 20px;

    border-radius: 6px;
`;

export const ModalSmall = styled(Content)`
    height: 20%;
    width: 40%;

    @media screen and (max-width: 960px) {
        width: 80%;
        height: 30%;
    }
`;

export const Title = styled.div`
    font-size: 2rem;
    text-align: center;
    font-weight: 600;

    @media screen and (max-width: 960px) {
        font-size: 1rem;
    }
`;

export const Description = styled.div``;

export const Form = styled.form`
    margin: 15px 0;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid #101522;
    border-radius: 6px;
    padding: 10px;

    color: #101522;
`;

export const Send = styled.button`
    background-color: #101522;
    color: #ffffff;

    border: none;
    border-radius: 6px;
    padding: 10px;

    float: right;

    margin: 15px 0;

    cursor: pointer;
`;
