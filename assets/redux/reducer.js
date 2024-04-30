import storage from './storage.js';
const init = {
    products: storage.get(),
    addProducts: storage.getProducts(),
};
const actions = {
    cart({ products }, args) {
        products.push(args);
    },
    add({ addProducts }, args) {
        addProducts.push(args);
        storage.setProducts(addProducts);
    },
};
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}
