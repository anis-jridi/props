import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Itemspro = ({produit, hands}) => {
    const (price, image, name)=produit
    

    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title> {el.name}</Card.Title>
    <Card.Text>
      {el.price}
    </Card.Text>
    <Button variant="primary">onClick ={()=> hands ()} Go somewhere</Button>
  </Card.Body>
</Card>
        </div>


export default Itemspro
