import React from 'react'
import Gallery from '../components/Gallery'
import LiveFeed from '../components/LiveFeed'

const Home = () => {
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
          <div className="col-span-9">
            <Gallery/>
          </div>
          <div className="col-span-3">
            <LiveFeed />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
