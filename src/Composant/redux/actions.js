
export const addToCart = (produit) => {
    return {
        type: 'ADD_TO_CART',
        playload: produit,
    };
};
export const delToCart = (produit) => {
    return {
        type: 'DEL_TO_CART',
        playload: produit,
    };
};