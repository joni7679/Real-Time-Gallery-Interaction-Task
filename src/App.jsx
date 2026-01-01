import Gallery from "./components/Gallery";
import LiveFeed from "./components/LiveFeed";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <Gallery />
        </div>
        <div className="col-span-3">
          <LiveFeed />
        </div>
      </div>
    </main>
  );
}
