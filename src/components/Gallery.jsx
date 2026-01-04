import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { fetchImges } from "../services/unplash";
import ShimmerEffect from "./ShimmerEffect";



export default function Gallery() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const handelInfiniteScroll = async () => {
        
        const scrollHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        try {
            if (scrollTop + innerHeight + 1 > scrollHeight) {
                setPage(prev => prev + 1);
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        const loadImages = async () => {
            setLoading(true);
            const data = await fetchImges(page);
            if (Array.isArray(data)) {
                setImages((prev) => [...prev, ...data]);
            }
            else {
                setImages([])
            }
            setLoading(false)
        }
        loadImages()
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll)
        return () => {
            window.removeEventListener("scroll", handelInfiniteScroll)
        }
    }, [])

    return (
        <>
            <div className="flex items-center justify-between mb-4 ">
                <div>
                    <h2 className="text-lg font-semibold">Explore Gallery</h2>
                    <p className="text-sm text-gray-500">
                        Latest captures from the community
                    </p>
                </div>
            </div>
            <div className="w-full ">
                <div className="grid md:grid-cols-3 gap-3">
                    {images.map((img) => (
                        <ImageCard key={img.id} img={img} />
                    ))}
                </div>
                {
                    loading && <ShimmerEffect />
                }
            </div>
        </>
    );
}
