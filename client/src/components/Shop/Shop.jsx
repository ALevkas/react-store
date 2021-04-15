import React from 'react';

import { BrandBar } from './BrandBar/BrandBar';
import { TypeBar } from './TypeBar/TypeBar';
import { DeviceList } from './Device/DeviceList';

import { Container } from './Shop.elements';

const Shop = () => {
    return (
        <div>
            <Container>
                <BrandBar />
                <TypeBar />
                <DeviceList />
            </Container>
        </div>
    );
};

export default Shop;
