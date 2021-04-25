import React, { useContext, useState } from 'react';

import {
    Modal,
    ModalMedium,
    Title,
    Form,
    FormItem,
    Select,
    Label,
    Input,
    Button,
    FormButtonGroup,
    FormProperty,
} from './Modal.elements';
import { Context } from '../../../index';
export const CreateDevice = ({ active, setActive }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((e) => e.number !== number));
    };

    return (
        <Modal onClick={() => setActive(false)}>
            <ModalMedium onClick={(e) => e.stopPropagation()}>
                <Title>Добавить устройство</Title>
                <Form>
                    <FormItem>
                        <Label htmlFor='type'>Выберите тип:</Label>
                        <Select placeholder='Выберите тип' name='type'>
                            {device?.types?.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor='brand'>Выберите брэнд:</Label>
                        <Select placeholder='Выберите брэнд' name='brand'>
                            {device?.brands?.map((brand) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor='name'>Введите имя:</Label>
                        <Input
                            placeholder='Введите имя'
                            name='name'
                            type='text'
                        />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor='cost'>Введите стоимость:</Label>
                        <Input
                            placeholder='Введите стоимость'
                            name='cost'
                            type='number'
                        />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor='image'>Выберите изображение:</Label>
                        <Input name='image' type='file' />
                    </FormItem>
                </Form>
                <FormButtonGroup>
                    <hr />
                    <Button onClick={addInfo}>Добавить новое свойство</Button>
                    {info.map((i) => (
                        <FormProperty key={i.number}>
                            <Input
                                type='text'
                                placeholder='Введите название свойства'
                            ></Input>
                            <Input
                                type='text'
                                placeholder='Введите описание свойства'
                            ></Input>
                            <Button onClick={() => removeInfo(i.number)}>
                                Удалить
                            </Button>
                        </FormProperty>
                    ))}
                    <hr />
                    <Button>Добавить устройство</Button>
                </FormButtonGroup>
            </ModalMedium>
        </Modal>
    );
};
