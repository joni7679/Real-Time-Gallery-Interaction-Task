export default function FeedItem({ text, active }) {
    return (
        <div
            className={`p-3 rounded-lg text-sm ${active
                    ? "bg-purple-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
        >
            {text}
        </div>
    );
}