import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function FeedItem() {
    const { feed } = useContext(DataContext)
    return (
        <>
            <div className="space-y-3 h-40 overflow-x-scroll ">
                {feed.map(f => (
                    <div key={f.id} className="p-3 shadow rounded">
                        {f.type === "comment" && (
                            <p>
                                <span className="font-semibold">{f.userId}</span>{" "}
                                commented on image{" "}
                                <p className="flex items-center gap-2">
                                    <span className="text-blue-600">{f.imageId}</span>
                                    <span className="text-blue-600">{f.text}</span>
                                </p>
                            </p>
                        )}
                        {f.type === "like" && (
                            <p>
                                {f.userId} liked image {f.imageId}
                                {f.emoji}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}