import { useState } from 'react'
import './App.css'

import { Navbar, Home, Feed, VideoDetail, ChannelDetail, SearchFeed, SideBar } from './components';




function App() {
  const [count, setCount] = useState(0);

  const [isSideBarActive, setSideBarActive] = useState(false);  

  const toggleSideBar = () =>
  {
    setSideBarActive(!isSideBarActive);
  }

  return (
    <div className='app'>
      <Navbar transitionSidebar={toggleSideBar} />
      <SideBar isSideBarActive={isSideBarActive} />
      {/* <Home /> */}
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
