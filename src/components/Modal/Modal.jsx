import { AiOutlineCloseCircle } from "react-icons/ai"; 
import React , { useState } from 'react';
import './Modal.css';
import { useUpdateProductsMutation } from "../../redux/api/productsApi";
import { notification } from "antd";
const Modal = ({ isOpen, onClose, product }) => {
    if (!isOpen) return null;
  
    const [title, setTitle] = useState(product?.title);
    const [price, setPrice] = useState(product?.price);
  
    const [updateProduct] = useUpdateProductsMutation();
  const handleupdateProduct = async (e) => {
    e.preventDefault();
    
    
    try {
      await updateProduct({ id: product.id, title, price }).unwrap();
      notification.success({
        message: 'Successfully edited product',
      })
      onClose();
    } catch (err) {
      console.error('Mahsulotni yangilashda xatolik:', err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}><AiOutlineCloseCircle /></button>
        <form onSubmit={handleupdateProduct} className="modal-body">
          <h3>Edit Product</h3>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  />
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}  />
          <button className='login-btn' >Edit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;