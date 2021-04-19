import React from 'react';

import { Modal, ModalSmall, Title, Form, Input, Send } from './Modal.elements';
export const CreateType = ({ active, setActive }) => {
    return (
        <Modal onClick={() => setActive(false)}>
            <ModalSmall onClick={(e) => e.stopPropagation()}>
                <Title>Добавить тип</Title>

                <Form>
                    <Input type='text' placeholder='Введите тип' />
                    <Send>Добавить</Send>
                </Form>
            </ModalSmall>
        </Modal>
    );
};
