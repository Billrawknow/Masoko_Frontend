import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>
            An ecommerce website is your digital storefront on the internet.
             It facilitates the transaction between a buyer and seller. 
             It is the virtual space where you showcase products, and online 
             customers make selections. Your website acts as the product shelves, 
             sales staff, and cash register of your online business channel.
            </p>
            <p>
            Ecommerce is a method of buying and selling goods and services online.
             The definition of ecommerce business can also include tactics like 
             affiliate marketing. You can use ecommerce channels such as your own
              website, an established selling website like Amazon, or social media 
              to drive online sales.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox