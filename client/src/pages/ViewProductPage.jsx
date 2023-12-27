import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams  } from "react-router-dom";

function ViewProductPage() {
  const [post,setPost] = useState({});
  const params = useParams();
  const navi = useNavigate();

  const getPost = async()=>{
    const result = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    )
    setPost(result.data.data);
  }

  useEffect(()=>{
    getPost();
  },[]);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{post.name}</h2>
        <p>{post.description}</p>
      </div>
      <button onClick={()=>{navi("/")}}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
