import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-white w-full shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to={`/`} className="text-xl font-bold text-purple-600">FotoOwl</Link>
                <div className="flex items-center gap-1 capitalize">
                    <h2>joni halder</h2>
                    <div className="flex items-center gap-4">
                        <img loading="lazy"
                            src="https://i.pravatar.cc/40"
                            className="w-9 h-9 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
