import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function ImageCard({ img }) {
    return (
        <>
        
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img loading="lazy" src={img.urls.full} alt="img unplash" className="w-full h-56 object-cover" />
                <div className="p-4">
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                            <Heart size={16} />
                            <span>24</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircle size={16} />
                            <span>3</span>
                        </div>
                        <Share2 size={16} className="ml-auto cursor-pointer" />
                    </div>
                </div>
            </div>
        </>

    );
}
