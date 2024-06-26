import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>

        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (123)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An E-Commerce website is an online platform that facilitate buying
                and selling of products or services over the internet serves as a vitual
                marketplace where business and individual showcase their products, interect with customer, and conduct 
                transactions without the need for a physical presence. E-Commerce websites
                have gained immense popularity due to their convenient accessiblity, 
                and the global reach they offer.
            </p>
            <p>
            E-Commerce has become an integral part of the modern economy, offering unprecedented opportunities for businesses to connect with customers and
            drive growth in the digital marketplace. As technology continues to advance and consumer preferences evolve, e-commerce is expected to continue its
            rapid expansion, shaping the future of retail and commerce worldwide.
            </p>
        </div>


    </div>
  )
}
