import FeedItem from "./FeedItem";

export default function LiveFeed() {
    return (
        <>
            <div className="bg-white rounded-xl p-4 shadow-sm sticky feeditem">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <h3 className="font-semibold">Live Activity</h3>
                </div>
                <div className="space-y-3">
                   <FeedItem/>
                </div>
            </div>
        </>
    );
}