import React from 'react'
import './AskQuestion.css'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {askquestion} from '../../actions/question'

const AskQuestion = () => {
const [questionTitle, setquestionTitle] = useState('')
const [questionBody, setquestionBody] = useState('')
const [questionTags, setquestionTags] = useState('')
const dispatch=useDispatch();

const User = JSON.parse(localStorage.getItem('Profile'));
const navigate = useNavigate();

const handleSubmit=(e)=>{
e.preventDefault();
// console.log({questionTitle,questionBody,questionTags})
(dispatch(askquestion({questionTitle,questionBody,questionTags ,userPosted:User.result.name,userId:User?.result._id },navigate)));

}
const handelEnter =(e)=>{
if(e.key === 'Enter'){
  setquestionBody(questionBody + '\n');
}


}



  return (
    
<div className='ask-question'>


<div className="ask-ques-container">

<h1>Ask a public Question</h1>

<form onSubmit={handleSubmit}>

<div className="ask-form-container">
<label htmlFor="ask-ques-title">

<h4>Title</h4>
<p>Be specific and imagine you are asking to a another person</p>
<input type="text" onChange={ (e)=>{setquestionTitle(e.target.value)}}  id='ask-ques-title'  placeholder='e.g is there an R function for finding the index of an element in a vector' />
</label>

<label htmlFor="ask-ques-body">

<h4>Body</h4>
<p>Include all the information someone would need to answer your question</p>
<textarea name=""  onChange={ (e)=>{setquestionBody(e.target.value)}} id='ask-ques-body' cols="30" rows="10" onKeyPress={handelEnter} ></textarea>

</label>


<label htmlFor="ask-ques-tags">

<h4>Tags</h4>
<p>Add upto five tags to describe what your question is about</p>
<input type="text"   onChange={ (e)=>{setquestionTags(e.target.value.split(' '))}} id='ask-ques-tags'  placeholder='e.g xml typescript wordpress' />
</label>




</div>

<input type="submit" value='Riview your question' className='review-btn'/>


</form>


</div>



</div>


  )
}

export default AskQuestion