import React from 'react'
import './quote.css'
import Form from './Form'
function Quote({ setModalIsOpen }) {
  return (
    <div className='Quote'>
      <div className='close'>
        <p>Conect With Us</p>
        <span onClick={()=>{setModalIsOpen(false)}} style={{cursor:'pointer'}}>X</span>
      </div>
      <Form/>
    </div>
  )
}

export default Quote