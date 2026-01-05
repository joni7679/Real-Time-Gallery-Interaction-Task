import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { fetchImges } from "../services/unplash";
import ShimmerEffect from "./ShimmerEffect";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [hasmore, setHasMore] = useState(true)

    useEffect(() => {
        const loadImages = async () => {
            if (loading) return;
            if (page === 1) {
                setLoading(true);
                setInitialLoading(true)
            }
            else {
                setLoading(false);
            }
            const data = await fetchImges(page);
            if (!data || data.length === 0) {
                setHasMore(false)
            }
            if (Array.isArray(data)) {
                setImages((prev) => [...prev, ...data]);
            }
            else {
                setImages([])
            }
            setInitialLoading(false);
            setLoading(false);
        }
        loadImages()
    }, [page])

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
                <InfiniteScroll
                    dataLength={images.length}
                    next={() => setPage(prev => prev + 1)}
                    hasMore={hasmore}
                    loader={<ShimmerEffect />}
                    endMessage={
                        <p className="flex items-center justify-center font-semibold capitalize text-2xl">
                            no more images
                        </p>
                    }>
                    <div className="grid md:grid-cols-3 gap-3">
                        {images.map((img) => (
                            <ImageCard key={img.id} img={img} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
}
