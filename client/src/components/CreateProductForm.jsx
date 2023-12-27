import { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

function CreateProductForm() {
  const [name,setName] = useState("");
  const [img,setImg] = useState("");
  const [price,setPrice] = useState("");
  const [des,setDes] = useState("");

  const navi = useNavigate();

  const post = async () => {
    await axios.post("http://localhost:4001/products",{
      name: name,
      image: img,
      price: Number(price),
      description: des,
  });
    navi("/");
  };

  const sub = (e)=>{
    e.preventDefault();
    post();
  }

  return (
    <form className="product-form" onSubmit={sub}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {setImg(e.target.value)}}
            value={img}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {setPrice(e.target.value)}}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {setDes(e.target.value)}}
            value={des}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
