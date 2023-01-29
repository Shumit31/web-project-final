import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ">{children}</button>
  )
}

export default PrimaryButton