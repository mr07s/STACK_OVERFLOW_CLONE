import React from 'react'
import LeftSidebar from '../../components/Navbar/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Navbar/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment'
import { useState } from 'react'
import EditProfileForm from './EditProfileForm'
import Profilebio from './Profilebio'

import './UserProfile.css'

const UserProfile = () => {




  const {id }= useParams()
const users =useSelector((state)=>state.usersReducer)
const currentProfile = users.filter((user) => user._id === id)[0]
// console.log(currentProfile);
const currentUser =JSON.parse(localStorage.getItem('Profile'));


const handleEdit =()=>{




}

const [Switch, setSwitch] = useState(false)



  return (
    <div className='home-container-1'>
<LeftSidebar/>
<div className="home-container-2">

<section>
<div className="user-details-container">
<div className="user-details">
<Avatar  backgroundColor="purple" color='white' fontSize='50px'   px='40px' py='30px'                     >

{currentProfile?.name.charAt(0).toUpperCase()} 

</Avatar>

<div className="user-name">

<h1>{currentProfile?.name}</h1>
<p> <FontAwesomeIcon icon={faBirthdayCake} />   joined {moment(currentProfile?.joinedOn).fromNow()} </p>
{/* <i class="fa-solid fa-cake-candles"></i> */}
</div>
{

currentUser?.result._id === id &&(

  <button type='button' onClick={ ()=>setSwitch(true)} className="edit-profile-btn" >
<FontAwesomeIcon icon={faPen} />
Edit Profile
  </button>
)

}


</div>
</div>


<>
{
Switch?(
  <EditProfileForm currentUser ={currentUser} setSwitch={setSwitch}/>
):(
  <Profilebio currentProfile={currentProfile}/>
)



}

</>


</section>


</div>
</div>
  )
}

export default UserProfile