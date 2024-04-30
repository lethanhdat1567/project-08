import storage from './storage.js';
export default function logger(reducer) {
    return (prevState, action, args) => {
        const nextState = reducer(prevState, action, args);
        console.log(nextState);
        storage.set(nextState.products);
        return nextState;
    };
}
