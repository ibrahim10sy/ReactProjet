
//Pour ajouter
export const addCart = (product) =>{
    return{
        type:"ADDITEM",
        playload : product
    }
}


//Pour supprimer
export const delCart = (product) =>{
    return{
        type:"DELITEM",
        playload : product
    }
}