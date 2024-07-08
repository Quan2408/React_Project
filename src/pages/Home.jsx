import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { state } = useContext(ProductContext);
  return (
    <div className="container-fluid">
      <h1 className="text-center my-4">List Product</h1>
      <div className="row g-4 row-custom">
        {state.products.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card h-100">
              <Link to={`/product-detail/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <Link to={`/product-detail/${item.id}`}>
                  <h5 className="card-title">{item.title}</h5>
                </Link>
                <p className="card-text">{item.price}$</p>
                <button className="btn btn-warning">Buy No</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
