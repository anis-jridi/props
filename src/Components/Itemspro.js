import React from 'react'
import { Table, button } from 'react-bootstrap'

const Itemspro= ({produit,hands,titel})=> {
  const {name,image,price} =produit
  
      return (
          <div>
             {
             <Table striped bordered hover>
      <tr>
      <th><h6>{titel}</h6> </th>
        <th>{name}</th>
        <th><img style={{width:100}} src={image} alt="" /></th>
        <th> {price}</th>
        <th> <button onClick={()=>hands(name,price)}>info</button>
  </th>
      </tr>
    
  </Table>  }
          </div>
      )
  
      }

      Itemspro.defaultProps = {
          titel :"this is default props"}


export default Itemspro

