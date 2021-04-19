import React from 'react';

import { Modal, ModalSmall, Title, Form, Input, Send } from './Modal.elements';
export const CreateBrand = ({ active, setActive }) => {
    return (
        <Modal onClick={() => setActive(false)}>
            <ModalSmall onClick={(e) => e.stopPropagation()}>
                <Title>Добавить бренд</Title>

                <Form>
                    <Input type='text' placeholder='Введите бренд' />
                    <Send>Добавить</Send>
                </Form>
            </ModalSmall>
        </Modal>
    );
};
