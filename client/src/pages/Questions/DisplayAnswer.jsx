import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'

import Avatar from '../../components/Navbar/Avatar/Avatar'
import { useDispatch } from 'react-redux'
import { deleteAnswer } from '../../actions/question'


const DisplayAnswer = ({question,handleshare}) => {


  
  const User = JSON.parse(localStorage.getItem('Profile'));
  
  
  const {id} =useParams();
  const dispatch=useDispatch();
  
  
  
  const handleDelete =(answerId,noOfAnswers)=>{
    
    console.log(answerId);


dispatch(deleteAnswer(id,answerId, noOfAnswers - 1));


};
  return (
    <div>

{
    question.answer.map((ans)=>(
<div className='display-ans' key={ans._id}>
<p>{ans.answerBody}</p>
<div className='question-actions-user'>

<div>

    <button type='button' onClick={handleshare}>Share</button>
    
    {
User?.result?._id === ans?.userId && (

<button type='button' onClick= {() =>handleDelete(ans._id , question.noOfAnswers)} >
  Delete
  </button>
)

}

</div>
<div>
<p>answered{moment(ans.answeredOn).fromNow()}</p>
<Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
<Avatar backgroundColor="lightgreen" px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar> 
  <div>{ans.userAnswered}</div>
</Link>
</div>

</div>
</div>

    ))
}

    </div>
  )
}

export default DisplayAnswer