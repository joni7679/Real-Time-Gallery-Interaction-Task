import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function FeedItem() {
    const { feed } = useContext(DataContext)
    console.log("feed",feed);
    
    return (
        <>
            <div className="space-y-3">
                {feed.map(f => (
                    <div key={f.id} className="p-3 shadow rounded">
                        {f.type === "comment" && (
                            <p>
                                 {f.userId} commented: "{f.text}"
                            </p>
                        )}
                        {f.type === "like" && (
                            <p>
                                 {f.userId} liked image {f.imageId}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}