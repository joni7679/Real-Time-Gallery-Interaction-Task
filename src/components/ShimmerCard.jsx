import React from 'react'

const ShimmerCard = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto px-4 py-3  min-h-screen flex items-center  justify-center mt-5 flex-col  container'>
                <div className='max-w-md w-full h-96 shadow-lg rounded-2xl'>
                    <div className="img box w-full h-72 bg-gray-300 rounded-2xl animate-pulse">

                    </div>
                    <div className="reactions-box w-full p-5 rounded bg-gray-200 mt-5 animate-pulse"></div>
                </div>
                <div className='max-w-md w-full shadow-lg rounded-2xl'>
                    <div className="comment-list w-full p-12 rounded bg-gray-300 mt-5 animate-pulse">
                        <div className="comment-box">
                            <div className="username p-5 rounded-2xl bg-gray-100 animate-pulse">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShimmerCard
