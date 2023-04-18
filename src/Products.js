import React from 'react'
import './products.css'

function Products({id,name,image,rating,price}) {
  return (
    <div className='products'>
    <div className='products_container'>
      <p>{name}</p>
      <img src={image} alt=''/>

      <div className='price_rating_add_to_cart'>
     
        <div>
            <p>{price} $</p>
        </div>

        <div className='add_to_cart'>
            <button>Add +</button>
           
        </div>


      </div>





    </div>
    </div>
   
  )
}

export default Products
