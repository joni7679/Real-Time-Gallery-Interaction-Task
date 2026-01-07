
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShimmerCard from '../components/ShimmerCard';
import Comments from '../components/Comments';
import { DataContext } from '../context/DataContext';

const ImgDetlist = () => {
    const { commentCountByImage, comments } = useContext(DataContext)
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
    const imageId = id;

    const imageComments = comments.filter(c => c.imageId === imageId);

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
                        <div className="comment-box w-ull h-48 overflow-x-scroll">
                            <div className="username">
                                {
                                    imageComments.length === 0 ? <p className='font-semibold capitalize text-shadow-md'> no comments</p>
                                        :
                                        imageComments.map(c => (
                                            <div key={c.id} className='p-4 shadow mt-5'>
                                                <div>
                                                    <p><span className='text-sm'>{c.userId}</span></p>
                                                </div>
                                                <p >{c.text}</p>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                    <Comments imgid={id} />
                </div>
            </section>
        </>
    )
}

export default ImgDetlist
