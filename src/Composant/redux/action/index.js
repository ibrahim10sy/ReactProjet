//Pour ajouter le produit au pannier


export const addCart = (produit) => {
    return {
        type : "ADDITEM",
        playload : produit
    }
}

//Pour supprimer

export const delCart = (produit) => {
    return {
        type : "DELITEM",
        playload : produit
    }
}