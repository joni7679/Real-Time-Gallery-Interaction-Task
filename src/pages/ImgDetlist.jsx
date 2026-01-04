import React from 'react'
import { Link } from 'react-router-dom'

const ImgDetlist = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto px-4 py-3  min-h-screen flex items-center  justify-center mt-5 flex-col  container'>
                <div className='max-w-md w-full h-96 shadow-lg rounded-2xl'>
                    <div className="img box w-full h-72 bg-red-600 rounded-2xl"></div>
                    <div className="reactions-box w-full p-5 rounded bg-green-500 mt-5"></div>
                </div>
                <div className='max-w-md w-full shadow-lg rounded-2xl'>
                    <div className="comment-list w-full p-12 rounded bg-green-500 mt-5">
                        <div className="comment-box">
                            <div className="username">
                                <p className='text-xl capitalize'>Joni halder</p>
                                <p className='text-sm capitalize'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae repellendus sequi magnam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImgDetlist
