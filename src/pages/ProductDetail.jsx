import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    })();
  }, [id]);

  return (
    <div className="container-fluid my-5 con-custom">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            className="img-fluid"
            alt={product.title}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text bg-light">{product.title}</h1>
          <hr />
          <p>Price: {product.price}$</p>
          <hr />
          <p>Description: {product.description}</p>
          <hr />
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
