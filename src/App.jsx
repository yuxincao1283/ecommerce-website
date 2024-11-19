import { useState } from 'react'
import './App.css'

import { Navbar, Home, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Navbar />
      <Home />
    </div>
    // <>
    //   <BrowserRouter>
    //     <Box sx={{backgroundcolor: '#000'}}>
    //       <Navbar />
    //       {/* <Routes>
    //         <Route path="/" exact element={<Feed />} />
    //         <Route path="/video/:id" element={<VideoDetail />} />
    //         <Route path="/channel/:id" element={<ChannelDetail />} />
    //         <Route path="/search/:searchTerm" element={<SearchFeed />} />
    //       </Routes> */}
    //     </Box>
    //   </BrowserRouter>
    // </>
  );
}

export default App;
