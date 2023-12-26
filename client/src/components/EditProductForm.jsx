import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProductForm() {
  const [data, setData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const getData = async () => {
    try {
      const res = await axios(`http://localhost:4001/products/${id}`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4001/products/${id}`, data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={onSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            value={data.name}
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            value={data.image}
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            value={data.price}
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            value={data.description}
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              handleChange(e);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
