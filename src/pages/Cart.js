import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {remove} from '../Redux/cartSlice'
import './cart.css'
const Cart = () => {
  const products = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const removeitem=(product)=>{
    dispatch(remove(product))
  }
  return (
    <div>
      <div className='container'>
      <h1 style={{textAlign:"center"}}>Your Cart!</h1>
       {products.length==0? <h4>No Item Added yet!</h4>:(
          <div className='row product_row1'>
            {products.map((product) => (
                <div className='col-md-8 col-sm-12'  key={product.id}>
                <div className="parentProduct1">
                    <div className='productImg1'>
                    <img src={product.image} alt="" />
                    </div>
 
                    <div className='content1'>
                    <p>{product.title}</p>
                    <h5>{product.price}</h5>
                    <button className="btn btn-primary"
                    onClick={()=>removeitem(product.id)}
                    >
                       Remove Item
                    </button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
           )
          }
          </div>
        </div>
  )
}

export default Cart