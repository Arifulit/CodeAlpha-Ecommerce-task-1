import React from "react";
import { Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  // Empty Cart component
  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Add product to the cart
  const addItem = (product) => {
    dispatch(addCart(product));
  };

  // Remove product from the cart
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  // Show cart items and order summary
  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <section className="h-100 bg-light">
          <div className="container py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-white">
                    <h5 className="mb-0 fw-bold">Your Cart Items</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => (
                      <div key={item.id} className="row align-items-center mb-4 border-bottom pb-3">
                        <div className="col-3 text-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: "80px", objectFit: "contain" }}
                          />
                        </div>
                        <div className="col-4">
                          <h6 className="fw-semibold">{item.title.substring(0, 40)}...</h6>
                          <p className="text-muted mb-0">${item.price}</p>
                        </div>
                        <div className="col-5 d-flex align-items-center justify-content-end">
                          <button className="btn btn-outline-dark btn-sm me-2" onClick={() => removeItem(item)}>
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="mx-2 fw-semibold">{item.qty}</span>
                          <button className="btn btn-outline-dark btn-sm" onClick={() => addItem(item)}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-header bg-white">
                    <h5 className="mb-0 fw-bold">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total Items:</span>
                        <span>{totalItems}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Shipping:</span>
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between fw-bold fs-5">
                        <span>Total:</span>
                        <span>${Math.round(subtotal + shipping)}</span>
                      </li>
                    </ul>
                    <Link to="/checkout" className="btn btn-dark w-100">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Your Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
