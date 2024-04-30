const CART_STORAGE_KEY = 'CART';
const ADD_STORAGE_KEY = 'ADD';

export default {
    get() {
        return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    },
    set(products) {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(products));
    },
    getProducts() {
        return JSON.parse(localStorage.getItem(ADD_STORAGE_KEY)) || [];
    },
    setProducts(addProducts) {
        localStorage.setItem(ADD_STORAGE_KEY, JSON.stringify(addProducts));
    },
};
