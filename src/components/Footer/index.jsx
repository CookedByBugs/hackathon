import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto bg-bar p-3 text-white text-center'>
        &copy; {new Date().getFullYear()}. All Rights Reserved
    </footer>
  )
}

export default Footer