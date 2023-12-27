import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {

  const navi = useNavigate()
  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <button onClick={()=>{navi("/")}}>Back to Home</button>
    </div>
  );
}

export default CreateProductPage;
