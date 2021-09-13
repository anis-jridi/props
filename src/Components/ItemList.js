import React from 'react'
import Itemspro from './Itemspro'
const ItemList = (props) => {
    return (
        <div>
            {
                props.listeDesproduits.map(
                    (el,i)=>(
                        <Itemspro produit ={el} key ={i} hands = {props.handel}/>
                    )
                )
            }
        </div>
    )
}

export default ItemList