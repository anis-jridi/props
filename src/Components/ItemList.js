import React from 'react'

const ItemList = ({listeDesproduits,handel}) => {
    return (
        <div>
            {
                listeDesproduits.map(
                    (el,i)=>(
                        <Itemspro produit =[el] key =[i] hands = (handel)/>
                    )
                )
            }
        </div>
    )
}

export default ItemList
