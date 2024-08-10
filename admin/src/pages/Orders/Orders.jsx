import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets.js';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error in Fetching order");
      }
    } catch (error) {
      toast.error("Error in Fetching order");
    }
  };

  const statusHandler = async (event, orderId)=>{
    const response = await axios.post(url+ "/api/order/status",{orderId, status:event.target.value})
    if (response.data.success) {
      fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="class-list">
        {orders.map((order, index) => {
          const address = JSON.parse(order.address); // Parse the serialized address
          return (
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order.item.name'>
                  {order.items.map((item, itemIndex) => {
                    if (itemIndex === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + " , ";
                    }
                  })}
                </p>
                <p className='order-item-name'>{address.firstName + " " + address.lastName}</p>
                <div className="order-item-address">
                  <p> {address.street+", "} </p>
                  <p>{address.city+", "+address.state+", "+address.country+", "+address.zipcode+", " }</p>
                  <p className='phone-number'>{address.phone} </p>
                  <p className='order-item-length'>
                    Items = {order.items.length}
                  </p>
                  <p>
                    ${order.amount}
                  </p>
                  <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} >
                    <option value="Food processing">Food processing</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
