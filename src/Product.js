import React from "react";
import { useHistory,useRouteMatch, useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();

  const { url, path } = useRouteMatch();
  // console.log("day la url", url)
  // console.log(" day la path", path)
  // console.log(useParams())
  const history = useHistory()

  const product = data.find((p) => p.id === Number(productId));
  let productData;

  const historyTest = () => {
    // history.push('/')
    // push() la them vo stack
    history.replace('/')
    //replace() la pop roi roi them vo stack
  }

  if (product) {
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  } else {
    productData = <h2>Sorry. Product doesn't exist</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          background: "#ffffff"
        }}
      >
        {productData}
      </div>
      <button onClick={historyTest} >History Test</button>
    </div>
  );
};

export default Product;
