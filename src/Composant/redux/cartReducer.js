
const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cartItems: [...state.cartItems, action.playload],
            };
        case 'DEL_TO_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        default:
            return state;
           
    }
};

export default cartReducer;