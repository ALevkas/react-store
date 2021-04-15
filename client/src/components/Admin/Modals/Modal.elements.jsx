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
    height: 50%;
    width: 50%;

    border-radius: 6px;
`;
