import React from 'react';

import { Modal, Content } from './Modal.elements';
export const CreateDevice = ({ active, setActive }) => {
    return (
        <Modal onClick={() => setActive(false)}>
            <Content onClick={(e) => e.stopPropagation()}></Content>
        </Modal>
    );
};
