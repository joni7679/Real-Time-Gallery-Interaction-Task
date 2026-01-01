import ImageCard from "./ImageCard";

const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
];

export default function Gallery() {
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

            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {images.map((img, i) => (
                    <ImageCard key={i} img={img} />
                ))}
            </div>
        </>
    );
}
