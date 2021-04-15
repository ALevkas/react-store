import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id: 1,
                name: 'Холодильник',
            },
            { id: 2, name: 'Смартфоны' },
            { id: 3, name: 'Ноутбуки' },
            { id: 4, name: 'Телевизоры' },
        ];
        this._brands = [
            {
                id: 1,
                name: 'Samsung',
            },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Lenovo' },
            { id: 4, name: 'Hp' },
            { id: 5, name: 'Sony' },
            { id: 6, name: 'Asus' },
        ];
        this._devices = [
            {
                id: 1,
                name: 'Iphone 12 pro',
                price: 120000,
                rating: 0,
                img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
            },
            {
                id: 2,
                name: 'Iphone 12 pro',
                price: 120000,
                rating: 5,
                img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
            },
            {
                id: 3,
                name: 'Iphone 12 pro',
                price: 120000,
                rating: 3,
                img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
            },
            {
                id: 4,
                name: 'Iphone 12 pro',
                price: 120000,
                rating: 5,
                img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
            },
            {
                id: 5,
                name: 'Iphone 12 pro',
                price: 120000,
                rating: 5,
                img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
            },
            {
                id: 6,
                name: 'Iphone 12 pro',
                price: 120000,
                rating: 5,
                img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
            },
            {
                id: 7,
                name: 'Iphone 12 pro',
                price: 120000,
                rating: 5,
                img: `https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000`,
            },
        ];

        this._selectedType = {};

        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}
