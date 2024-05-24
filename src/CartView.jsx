import React, { useState } from "react";

export default function CartView({ details, remove }) {
  const {
    products = [],
    total,
    discountedTotal,
    totalProducts,
    totalQuantity,
  } = details || {};

  const [removedProducts, setRemovedProducts] = useState([]);

  if (!!true) {
    return (
      <div className="cart-container">
        <header>
          <span>Item</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Totaal</span>
        </header>

        <main>
          {products.map((product) => {
            if (removedProducts.includes(product.id)) return null;
            return (
              <div key={product.id} className="ui-product">
                <div>
                  <img src={product?.thumbnail} />
                  <h3>{product?.title}</h3>
                  <button
                    onClick={() =>
                      setRemovedProducts((ids) => [...ids, product.id])
                    }
                  >
                    X
                  </button>
                </div>
                <div>${product?.price}</div>
                <div>{product?.quantity}</div>
                <div>{product?.total}</div>
              </div>
            );
          })}
        </main>

        <table className="ui-cart">
          <tbody>
            <tr>
              <td colspan={5}>
                <p>
                  Total Products:{" "}
                  <strong>{totalProducts - removedProducts.length}</strong>
                </p>
                <p>
                  Total Quantity: <strong>{totalQuantity}</strong>
                </p>
                <hr />
                <p>
                  Total: <strong>{total}</strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <table className="ui-cart">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product?.thumbnail} />
              </td>
              <td>{product?.title}</td>
              <td>${product?.price}</td>
              <td>{product?.quantity}</td>
              <td>{product?.total}</td>
            </tr>
          ))}

          {/* 
           "total": 103774.85,
  "discountedTotal": 89686.65,
  "userId": 33,
  "totalProducts": 4,
  "totalQuantity": 15
          */}

          <tr>
            <td colspan={5}>
              <p>
                Total Products: <strong>{totalProducts}</strong>
              </p>
              <p>
                Total Quantity: <strong>{totalQuantity}</strong>
              </p>
              <hr />
              <p>
                Total: <strong>{total}</strong>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
