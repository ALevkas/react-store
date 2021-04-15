import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';

import {
    Container,
    Device,
    Image,
    InfoDevice,
    NameDevice,
    CardDevice,
    Price,
    AddBasket,
    Characteristics,
    Title,
    Attribute,
} from './Device.elements';

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12 pro',
        price: 120000,
        rating: 3,
        img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
    };

    const description = [
        { id: 1, title: 'Оперативная память', description: '5гб' },
        { id: 2, title: 'Оперативная память', description: '5гб' },
        { id: 3, title: 'Оперативная память', description: '5гб' },
        { id: 4, title: 'Оперативная память', description: '5гб' },
        { id: 5, title: 'Оперативная память', description: '5гб' },
        { id: 6, title: 'Оперативная память', description: '5гб' },
    ];

    return (
        <Container>
            <Device>
                <Image src={device.img} />
                <InfoDevice>
                    <IoIosStarOutline size={25} />
                    <NameDevice>{device.name}</NameDevice>
                </InfoDevice>
                <CardDevice>
                    <Price>от {device.price} руб.</Price>
                    <AddBasket>Добавить в корзину</AddBasket>
                </CardDevice>
            </Device>
            <Title>Характеристики</Title>
            <Characteristics>
                {description.map((info) => (
                    <Attribute key={info.id} index={info.id}>
                        {info.title}: {info.description}
                    </Attribute>
                ))}
            </Characteristics>
        </Container>
    );
};

export default DevicePage;
