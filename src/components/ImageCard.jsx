import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ImageCard({ img }) {
    return (
        <>
            <Link to={`/gallerydetails/${img.id}`}  className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img loading="lazy" src={img.urls.full} alt="img unplash" className="w-full h-56 object-cover" />
                <div className="p-4">
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                            <Heart className="text-xl" />
                            <span>24</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircle className="text-xl" />
                            <span>3</span>
                        </div>
                        <Share2 className="ml-auto cursor-pointer text-xl" />
                    </div>
                </div>
            </Link>
        </>
    );
}
