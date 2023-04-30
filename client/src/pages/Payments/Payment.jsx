import React from 'react'
import Freeplan from './Freeplan'
import Goldplan from './Goldplan'
import './Payment.css'
import Silverplan from './Silverplan'



const Payment = () => {
  return (
    <>
    <div className="outercontainer">

<h1>Stack Overflow  <br/> Question Pricing and Plans</h1>
    </div>
  <div className="container">
<Freeplan/>
<Silverplan/>
<Goldplan/>
  </div>
    </>
  )
}

export default Payment