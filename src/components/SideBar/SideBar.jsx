import React from 'react'

import "./SideBar.css"



const SideBar = () => {
  return (
    <div className='SideBar'>
        <div className='TypeEntry'>
            
            <label className='EntryLabel'> For you </label>

            <a className='EntryElement'> Trending now </a>

            <a className='EntryElement'> Recommendations </a>

            <a className='EntryElement'> Favorite sellers </a>

            <a className='EntryElement'> Limited-Time Offers </a>

            <hr className='LineBreak'/>
        </div>
        
        <div className="TypeEntry">
            <label className='EntryLabel'> Clothing Types </label>

            <a className='EntryElement'> type1 </a>

            <a className='EntryElement'> type2 </a>
            <hr className='LineBreak'/>
        </div>
        
        <div className="TypeEntry">
            <label className='EntryLabel'> Social </label>

            <a className='EntryElement'> type1 </a>

            <a className='EntryElement'> type2 </a>
            <hr className='LineBreak'/>
        </div>
        


    </div>
  )
}

export default SideBar