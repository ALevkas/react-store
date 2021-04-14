import Admin from './layout/Admin';
import Auth from './components/Auth/Auth';
import Basket from './layout/Basket';
import DevicePage from './layout/DevicePage';
import Shop from './layout/Shop';

import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from './utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage,
    },
];
