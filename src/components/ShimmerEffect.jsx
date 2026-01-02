import React from 'react'

const ShimmerEffect = ({ count = 12 }) => {
    const arry = new Array(count).fill(0)
    return (
        <>
            <div className='w-full grid md:grid-cols-3 gap-1.5 flex-wrap '>
                {
                    arry.map((_, index) => {
                        return (
                            <div key={index} className='max-w-md w-full h-80 rounded-2xl bg-gray-300 animate-pulse'>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShimmerEffect
