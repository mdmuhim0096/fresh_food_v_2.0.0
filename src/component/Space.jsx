import React from 'react'

const Space = ({ height = 50 }) => {
    return (
        <div
            className="w-full"
            style={{ height: `${height}vh` }}
        ></div>
    )
}

export default Space;