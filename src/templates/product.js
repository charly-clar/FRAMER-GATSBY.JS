import React from 'react'
import { Image } from '../components/gatsby-images/image'

const Product = ({pageContext}) => {

    const product = pageContext

    return (
      <div className="banner">
          <div className="inner-banner">
              <div className="container fluid">
                  <div className="main-headline">{product.title}</div>
                 <div className="image">
                     <Image src={product.src}/>
                 </div>
              </div>
          </div>
      </div>
    )
}

export default Product
