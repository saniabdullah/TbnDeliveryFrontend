import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 TBN Delivery All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer