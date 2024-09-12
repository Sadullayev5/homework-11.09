

// import { BiEditAlt } from "react-icons/bi"; 
// import React from 'react'
// import './Home.css'
// import {useGetProductsQuery} from '../../redux/api/productsApi'
// import { useUpdateProductsMutation } from "../../redux/api/productsApi";

// const Home = () => {

//     const {data} = useGetProductsQuery()

//     const [updateProduct , {data : updateData}] = useUpdateProductsMutation();


    

//     const handleUpdateProduct = (product) => {
//         const id = Number(product?.id)
//         console.log(id)
//         updateProduct({id , title: "q1231qqq" , price: "123"})
//     }

//     console.log(updateData)

//   return (
//     <div className="home">
//         <div className="card-wrapper">
//             {
//                 data?.map(product => 
//                     <div className="card" key={product?.id}>
//                         <div className="card-img">
//                             <img src={product?.category?.image} alt="" />
//                         </div>
                        
//                         <div className="card-info">
//                             <h3>{product?.title}</h3>
//                             <strong>${product?.price}</strong>
//                             <button onClick={() => {handleUpdateProduct(product)}}><BiEditAlt /></button>
//                         </div>
//                     </div>
//                 )
//             }
//         </div>

//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import './Home.css';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  const { data } = useGetProductsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="home">
      <div className="card-wrapper">
        {data?.map(product => 
          <div className="card" key={product?.id}>
            <div className="card-img">
              <img src={product?.category?.image} alt="" />
            </div>
            
            <div className="card-info">
              <h3>{product?.title}</h3>
              <strong>${product?.price}</strong>
              <button onClick={() => handleEditProduct(product)}>
                <BiEditAlt />
              </button>
            </div>
          </div>
        )}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default Home;