import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import * as actions from '../action/action'
import { connect } from 'react-redux';


import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";
import EmptyCart from "../components/EmptyCart";
import OrderSummary from "../components/OrderSummary";

const CartScreen = (props) => {




  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [charges, setCharges] = useState(0);
  const [cartTotal, setCarttotal] = useState(0);

  useEffect(() => {
    props.onCartLoad()
  }, []);

  useEffect(() => {

    let items = 0;
    let price = 0;
    let charge = 0;
    let cart = 0;

    props.Books.forEach((item) => {
      console.log("qty of each change", item.qty)
      items += item.qty;
      price += item.qty * item.price;
      charge += item.qty * 10;
      cart += item.qty * item.price + item.qty * 10;
    });

    setTotalPrice(price);
    setTotalItems(items);
    setCharges(charge);
    setCarttotal(cart);
    props.OrderSummary(totalPrice, totalItems, charges, cartTotal)

  }, [props.Books, totalPrice, totalItems, charges, cartTotal, setTotalPrice, setTotalItems, setCharges, setCarttotal])


  const deleteCartItem = (_id) => {
    props.onDeleteItem(_id)
  }

  const moveToWishlist = (cartItem, _id) => {
    props.onMoveItem(cartItem, _id)
  }



  return (
    <Row>
      <div>
        <h1>
          <span> Shopping Cart </span>
        </h1>
        {

          props.Books.map(function (item) {

            return (

              <Col sm={8}>
                <CartItem key={item._id} item={item} moveTo={moveToWishlist} remove={deleteCartItem} />
              </Col>
            );
          })

        }
        <br></br>
        <Col sm={3}>
          <Card>
            <ListGroup variant="flush">

              <ListGroupItem>
                <FormControl className="form-control me-sm-2" type="text" placeholder="Apply Coupon" style={{ height: "50px" }} className="mr-sm-2" />
              </ListGroupItem>
              <ListGroupItem>
                <Button className="btn btn-primary my-2 my-sm-0" type="submit">Apply Coupon</Button>

              </ListGroupItem>

              <ListGroupItem>
                <OrderSummary />
              </ListGroupItem>
              <Link to="/address">
                <Button
                  type="button"
                  className="btn-block"
                >
                  Proceed to checkOut
                </Button>
              </Link>
            </ListGroup>
          </Card>


        </Col>



      </div>
    </Row>
  );
};

const mapStateToProps = (state) => {
  console.log('Inside', state);
  return {
    Books: state.BookReducer.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCartLoad: () =>
      dispatch(actions.onCartLoadAction()),

    onDeleteItem: (_id) =>
      dispatch(actions.onDeleteItemAction(_id)),

    onMoveItem: (cartItem, _id) =>
      dispatch(actions.onMoveItemAction(cartItem, _id)),

    OrderSummary: (totalPrice, totalItems, charges, cartTotal) =>
      dispatch(actions.OrderSummaryAction(totalPrice, totalItems, charges, cartTotal)),


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);