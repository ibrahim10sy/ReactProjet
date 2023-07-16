const cart = [];

const handleCart = (state = cart,action) => {
    const produit = action.playload;
    switch (action.type){

        case "ADDITEM":
            //voir si le produit existe
            const exist = state.find((x) =>  x.id === produit.id);
            if(exist){
                //on incremente la quantité
                return state.map((x) =>
                x.id === produit.id ? {...x, qty: x.qty + 1} :x
                );
            } else{
                const produit = action.playload;
                return [
                    ...state,
                    {
                        ...produit,
                        qty: 1,
                    }
                ]
            } break;
            case "DELITEM":
                const exist1 = state.find((x) =>  x.id === produit.id);
                if(exist1.qty === 1 ){
                    return state.filter((x) => x.id !== exist1.id);
                }else{
                    return state.map((x) =>
                    x.id === produit.id ? {...x, qty: x.qty - 1}: x
                    );
                } break;

            default :
            return state;
            break;

    }
}