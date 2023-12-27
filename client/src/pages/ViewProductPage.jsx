import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState();
  const getProduct = async () => {
    try {
      const result = await axios(`http://localhost:4001/products/${id}`);
      setProduct(result.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {product?.name}</h2>
        <p>Price: {product?.price} THB</p>
        <p>{product?.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
