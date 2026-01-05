
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShimmerCard from '../components/ShimmerCard';

const ImgDetlist = () => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const Access_Key = import.meta.env.VITE_UNSPLASH_KEY
    const fetchImges = async () => {

        try {
            setLoading(true)
            const res = await axios.get(`https://api.unsplash.com/photos/${id}`,
                {
                    headers: { Authorization: `Client-ID ${Access_Key}`, },

                });
            console.log(res.data.urls.regular);
            setData(res.data)
        } catch (error) {
            console.log("error", error);
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchImges()
    }, [id])

    if (loading) {
        return <ShimmerCard />
    }

    return (
        <>
            <section className='max-w-7xl mx-auto px-4 py-3  min-h-screen flex items-center  justify-center mt-5 flex-col  container'>
                <div className='max-w-md w-full h-96 shadow-lg rounded-2xl'>
                    <div className="img box w-full h-72 rounded-2xl overflow-hidden">
                        <img loading='lazy' src={data.urls.regular} alt={data.alt_description || "unsplash image"} className="w-full h-72 object-cover" />
                    </div>
                    <div className="reactions-box w-full p-5 rounded  mt-5"></div>
                </div>
                <div className='max-w-md w-full shadow-lg rounded-2xl'>
                    <div className="comment-list w-full p-12 rounded  mt-5">
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
