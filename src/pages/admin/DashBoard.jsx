import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import api from "../../axios";

const DashBoard = () => {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state);
  const handleRemove = async (id) => {
    if (window.confirm("Delete this product?")) {
      try {
        await api.delete(`/products/${id}`);
        dispatch({ type: "DELETE_PRODUCT", payload: id });
      } catch (error) {
        console.error("Fail:", error);
      }
    }
  };
  return (
    <>
      <div className="container">
        <Link to="/admin/product-add" className="btn btn-primary">
          Add new product
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>

                <td>
                  {p.thumbnail ? (
                    <img src={p.thumbnail} width={190} alt={p.title} />
                  ) : (
                    "Updating"
                  )}
                </td>
                <td>{p.price}</td>
                <td>{p.description || "Updating"}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => handleRemove(p.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/admin/product-edit/${p.id}`}>
                    <button className="btn btn-warning w-100">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoard;
