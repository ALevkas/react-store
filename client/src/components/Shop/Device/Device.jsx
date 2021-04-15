import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

import {
    Card,
    Image,
    Info,
    Description,
    Name,
    Rating,
    Icon,
} from './Device.elements';
import { DEVICE_ROUTE } from '../../../utils/consts';

export const Device = ({ device }) => {
    const history = useHistory();
    return (
        <Card onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Image src={device.img} />
            <Info>
                <Description>Apple</Description>
                <Rating>
                    {device.rating > 4.5 ? (
                        <Icon>
                            <AiFillStar />
                        </Icon>
                    ) : device.rating > 2.5 ? (
                        <Icon>
                            <BsStarHalf />
                        </Icon>
                    ) : (
                        <Icon>
                            <AiOutlineStar />
                        </Icon>
                    )}
                </Rating>
                <Name>{device.name}</Name>
            </Info>
        </Card>
    );
};
