import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../Redux/cartSlice'
import './Product.css'
import {fetchProduct, setProduct} from '../Redux/productSlice'
import { STATUSES } from '../Redux/productSlice';
const Product = () => {
  const dispatch =  useDispatch()
  const {data:products,status} = useSelector((state)=>state.product) 
    // const[products,setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProduct())
      
        //  const fetchProducts = async () => {
        //      const res = await fetch('https:fakestoreapi.com/products');
        //      const data = await res.json();
        //      console.log(data);
        //      setProducts(data);
        //  };
        //  fetchProducts();
    }, []);
   const addToCart =(product)=>{
      dispatch(add(product))
   }
   if(status===STATUSES.LOADING){
       return <h2 style={{textAlign:"center"}}>loading...</h2>
   }
   
    if(status===STATUSES.ERROR){
       return <h2 style={{textAlign:"center"}}>Oops An Error occuard!...</h2>
   }
  
  return (
    <>
   <div className="container">
       <div className='row product_row'>
            {products.map((product) => (
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'  key={product.id}>
                <div className="parentProduct">
                    <div className='productImg'>
                    <img src={product.image} alt="" />
                    </div>
                    <div className='content'>
                    <p>{product.title}</p>
                    <h5>{product.price}</h5>

                    <button className="btn btn-primary"
                    onClick={()=>addToCart(product)}
                    >
                    Add to cart
                    </button>
                    
                    </div>
                </div>
                </div>
            ))}
        </div>
        </div>
    </>
  )
}

export default Product