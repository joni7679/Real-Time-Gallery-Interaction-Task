import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { fetchImges } from "../services/unplash";
import ShimmerEffect from "./ShimmerEffect";



export default function Gallery() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const loadImages = async () => {
            setLoading(true);
            const data = await fetchImges(page);
            if (Array.isArray(data)) {
                setImages(data);
            }
            else {
                setImages([])
            }
            setLoading(false)
        }
        loadImages()
    }, [page])
    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold">Explore Gallery</h2>
                    <p className="text-sm text-gray-500">
                        Latest captures from the community
                    </p>
                </div>
            </div>
            <div className="w-full">
                {
                    loading ? <ShimmerEffect count={12} /> :
                        <div className="grid md:grid-cols-3 gap-3">
                            {images.map((img, i) => (
                                <ImageCard key={i} img={img} />
                            ))}
                        </div>
                }
            </div>
        </>
    );
}
