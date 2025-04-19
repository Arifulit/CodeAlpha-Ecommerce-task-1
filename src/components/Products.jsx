import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart!");
  };

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        {Array(6).fill().map((_, i) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={i}>
            <Skeleton height={400} />
          </div>
        ))}
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center my-4">
          {["All", "men's clothing", "women's clothing", "jewelery", "electronics"].map((cat) => (
            <button
              key={cat}
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => cat === "All" ? setFilter(data) : filterProduct(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {filter.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
            <div className="card product-card h-100 shadow-sm border-0">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt={product.title}
                height="300"
                style={{ objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{product.title.substring(0, 35)}...</h5>
                <p className="card-text text-muted small">
                  {product.description.substring(0, 90)}...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fs-5 fw-semibold text-center">$ {product.price}</li>
              </ul>
              <div className="card-body d-flex justify-content-center gap-2">
                <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
                  Buy Now
                </Link>
                <button
                  className="btn btn-dark"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container my-5 py-3">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 fw-bold">Latest Products</h2>
          <hr className="w-25 mx-auto" />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
