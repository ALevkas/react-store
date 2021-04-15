import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';

import { Brands, Card } from './BrandBar.elements';

export const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Brands>
            {device.brands.map((brand) => (
                <Card
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    active={brand.id === device.selectedBrand.id}
                >
                    {brand.name}
                </Card>
            ))}
        </Brands>
    );
});
