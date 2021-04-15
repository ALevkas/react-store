import React, { useState } from 'react';
import { Container, Button } from './Admin.elements';

import { CreateBrand } from './Modals/CreateBrand';
import { CreateType } from './Modals/CreateType';
import { CreateDevice } from './Modals/CreateDevice';

const Admin = () => {
    const [createBrandActive, setCreateBrandActive] = useState(false);
    const [createDeviceActive, setCreateDeviceActive] = useState(false);
    const [createTypeActive, setCreateTypeActive] = useState(false);

    return (
        <>
            <Container>
                <Button onClick={() => setCreateBrandActive(true)}>
                    Добавить тип
                </Button>
                <Button onClick={() => setCreateDeviceActive(true)}>
                    Добавить бренд
                </Button>
                <Button onClick={() => setCreateTypeActive(true)}>
                    Добавить устройство
                </Button>
            </Container>

            {createBrandActive ? (
                <CreateBrand
                    active={createBrandActive}
                    setActive={setCreateBrandActive}
                />
            ) : null}
            {createDeviceActive ? (
                <CreateDevice
                    active={createDeviceActive}
                    setActive={setCreateDeviceActive}
                />
            ) : null}
            {createTypeActive ? (
                <CreateType
                    active={createTypeActive}
                    setActive={setCreateTypeActive}
                />
            ) : null}
        </>
    );
};

export default Admin;
