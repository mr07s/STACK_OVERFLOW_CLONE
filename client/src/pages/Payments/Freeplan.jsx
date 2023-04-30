import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './Freeplan.css'
const Freeplan = () => {

    const navigate=useNavigate();
const f_purchase=()=>{

    navigate('/')

}




  return (
    <>
<div className="freeplancontainer">

<div className="containertag">
<h1>Free</h1>
</div>

<div className='f-uppercontainer'>

<h1 >Free</h1>
<p >No credit card required</p>

</div>
<div className='f-middlecontainer'>

<p><FontAwesomeIcon icon="fa-solid fa-megaphone" /></p>
<p>You can ask only one question in 24 hours</p>

</div>

<div className='f-lowercontainer'>


<button onClick={f_purchase} >Purchase</button>
<p>Purchase your free plan</p>

</div>




</div>



    </>
  )
}

export default Freeplan