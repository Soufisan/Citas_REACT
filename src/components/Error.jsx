import { useState } from 'react'

const Error = ({ children }) => {
    return (
        <div className="bg-red-400 text-white font-bold rounded-md uppercase text-center p-3 mb-5">
            {children}
        </div>
    )
}

export default Error
