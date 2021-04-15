import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';

import { Device } from './Device';
import { Devices } from './Device.elements';

export const DeviceList = observer(() => {
    const { device } = useContext(Context);
    return (
        <Devices>
            {device.devices.map((dev) => (
                <Device key={dev.id} device={dev} />
            ))}
        </Devices>
    );
});
