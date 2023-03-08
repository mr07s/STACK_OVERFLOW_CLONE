import React from 'react'
import HomeMainbar from '../../components/Navbar/HomeMainbar/HomeMainbar'
import LeftSidebar from '../../components/Navbar/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/Navbar/RightSidebar/RightSidebar'
import '../../App.css'


const Questions = () => {
  return (
    <div className="home-container-1">

     <LeftSidebar/>
     <div className="home-container-2">
     <HomeMainbar/>
     <RightSidebar/>

     </div>








    </div>
  )
}

export default Questions