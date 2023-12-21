import "./App.css";
import ProductForm from "./components/ProductForm";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescripton] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}`);
    alert(`Image Url: ${imageUrl}`);
    alert(`Price: ${price}`);
    alert(`Description: ${description}`);
  };
  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Create Product</h1>
      </div>
      <ProductForm />
    </div>
  );
}

export default App;
