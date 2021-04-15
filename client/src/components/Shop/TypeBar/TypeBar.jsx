import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';

import { TypeGroup, TypeItem } from './TypeBar.elements';

export const TypeBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <TypeGroup>
            {device.types.map((type) => (
                <TypeItem
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType.id}
                >
                    {type.name}
                </TypeItem>
            ))}
        </TypeGroup>
    );
});
