
import React from 'react';
import {MdShoppingCart} from 'react-icons/md';
import{Button} from 'react-bootstrap';

class CartWidget extends React.Component{
    render(){

        return   <Button variant="danger"><MdShoppingCart/></Button> 


    }

}
export default CartWidget;