import React from 'react'
import styles from '../style'
const Button = () => {
  return (
    <div className="mt-10">
       <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
    text-[18px] rounded-[10px] text-primary outline-none ${styles}`}>
     Get Started
    </button>
    </div>
  )
}

export default Button