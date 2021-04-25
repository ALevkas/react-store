import React from 'react';

import {
    Modal,
    ModalSmall,
    Title,
    Form,
    Input,
    Button,
} from './Modal.elements';
export const CreateBrand = ({ active, setActive }) => {
    return (
        <Modal onClick={() => setActive(false)}>
            <ModalSmall onClick={(e) => e.stopPropagation()}>
                <Title>Добавить бренд</Title>

                <Form>
                    <Input type='text' placeholder='Введите бренд' />
                    <Button>Добавить</Button>
                </Form>
            </ModalSmall>
        </Modal>
    );
};
