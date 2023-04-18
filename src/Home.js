import React from 'react'
import './Home.css'
import Products from './Products';

function Home() {
  return (
    <div className='home'>
      
      <div className='top_picks'>
      <h2>Today's Pick</h2>
        <Products
        id='01'
        name='Cartoon Bear & Letter Graphic Tee'
        image='https://img.ltwebstatic.com/images3_pi/2023/02/06/1675676232125982d2084798dd21d64db05664fca5_thumbnail_900x.webp'
        rating={1}
        price={20.29}
        />

        <Products
        id='02'
        name='Cartoon Graphic Drawstring Thermal Hoodie'
        image='https://img.ltwebstatic.com/images3_pi/2022/12/02/1669950014aba78df2208c5dca323ad4ecdb565d3d_thumbnail_900x.webp'
        rating={1}
        price={20.29}
        />

    
      </div>

    </div>
  )
}

export default Home
