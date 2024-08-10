 import React, { useState } from 'react'; // Import necessary modules from React
import './Add.css'; // Import CSS for styling
import { assets } from '../../assets/assets'; // Import assets
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify';

const Add = ({url}) => {
   
  const [image, setImage] = useState(false); // State to store the uploaded image
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: "Salad" // Default category
  });

  // Handler for input changes
  const onChangeHandler = (event) => {
    const name = event.target.name; // Get the name of the input field
    const value = event.target.value; // Get the value of the input field
    setData(data => ({ ...data, [name]: value })); // Update the state with new value
  };

  // Handler for form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(); // Create a new FormData object
    formData.append('name', data.name); // Append name to formData
    formData.append('description', data.description); // Append description to formData
    formData.append('price', Number(data.price)); // Append price to formData
    formData.append('category', data.category); // Append category to formData
    formData.append('image', image); // Append image to formData
    
    // Make a POST request to add a new food item
    const response = await axios.post(`${url}/api/food/add`, formData);
    
    // If the request is successful, reset the form
    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: "Salad"
      });
      setImage(false); // Reset image state
      toast.success(response.data.message)
    } else {
       toast.error(response.data.message) // Handle error case (if needed)
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}> {/* Form for adding new food item */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" /> {/* Display uploaded image or placeholder */}
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required /> {/* File input for image */}
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' required /> {/* Input for product name */}
        </div>
        <div className="add-product-description">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write here' required ></textarea> {/* Textarea for product description */}
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category"> {/* Dropdown for product category */}
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$20' required /> {/* Input for product price */}
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default Add;
