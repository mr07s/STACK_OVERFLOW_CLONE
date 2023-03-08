import React, { useState } from 'react'
import { Link, useParams,useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import copy from 'copy-to-clipboard'


import upvote from '../../assests/upvote.svg'
import downvote from '../../assests/downvote.svg'
import './Questions.css'
import {useDispatch, useSelector} from 'react-redux';
import Avatar from '../../components/Navbar/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { deleteQuestion, postAnswer ,voteQuestion} from '../../actions/question'
const QuestionsDetails = () => {
  const {id}=useParams();

const questionList = useSelector(state => state.questionsReducer)

    // var questionList =[{
    //     _id:'1',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers:2,
    //     userId:1,
    //     questionTitle:"What is a function",
    //     questionBody:"It meant to be ",
    //     questionTags:["java","node js","react js","mongo db"],
    //     userPosted:"mano",
    //     askedOn:"jan 1",
    //     answer:[{
        
    //     answerBody:"Answer",
    //     userAnswered:'Kumar',
    //     answeredOn:"jan 2",
    //     userId:2,
    //     }]
        
        
    //     },{
    //       _id:'2',
    //       upVotes:0,
    //       downVotes:2,
    //       noOfAnswers:0,
    //       userId:1,
    //       questionTitle:"What is a function",
    //       questionBody:"It meant to be ",
    //       questionTags:["javascript","R","python"],
    //       userPosted:"mano",
    //       askedOn:"jan 1",
    //       answer:[{
        
    //         answerBody:"Answer",
    //         userAnswered:'Kumar',
    //         answeredOn:"jan 2",
    //         userId:2,
    //         }]
            
    //     },{
    //        _id:'3',
    //       upVotes:0,
    //       downVotes:2,
    //       noOfAnswers:0,
    //       userId:1,
    //       questionTitle:"What is a function",
    //       questionBody:"It meant to be ",
    //       questionTags:["javascript","R","python"],
    //       userPosted:"mano",
    //       askedOn:"jan 1",
    //       answer:[{
        
    //         answerBody:"Answer",
    //         userAnswered:'Kumar',
    //         answeredOn:"jan 2",
    //         userId:2,
    //         }]
            
    //     }]

    const Navigate=useNavigate();
    const dispatch=useDispatch();
const [Answer, setAnswer] = useState('');
const User =JSON.parse(localStorage.getItem('Profile'));
// const User = useSelector(state=>state.currentUserReducer)
// console.log(User);

const location =useLocation();
// console.log(location);
const url ='http://localhost:3000'




const handlePostAns = (e,answerLength)=>{
e.preventDefault();
if(User==null){
alert('Login or Signup to answer a question');
Navigate('/Auth');

}
else{
if(Answer === ''){
alert('Enter an answer before submitting');

}
else{
dispatch(postAnswer({id,noOfAnswers:answerLength + 1 ,answerBody:Answer,userAnswered : User.result.name, userId:User.result._id}))

}

}

}


const handleshare = ()=>
{
copy(url+location.pathname);
alert('Copied url:'+url+location.pathname)
}


const handleDelete =()=>{

dispatch(deleteQuestion(id,Navigate));



}

const handleUpVote =()=>{
dispatch(voteQuestion(id ,'upVote',User.result._id));

}


const handleDownVote =()=>{
dispatch(voteQuestion(id ,'downVote',User.result._id));

}










  return (
    <div>
<div className="question-details-page">
{

questionList.data===null?
<h1>Loading...</h1>:
<>
{

questionList.data.filter(question =>
  question._id === id
).map(question=>(
<div key={question._id }>
<section className='question-details-container'>
<h1>{question.questionTitle}</h1>
<div className='question-details-container-2'>
<div className="question-votes">
<img src={upvote} alt="" onClick={handleUpVote}/>
<p>{question.upVote.length-question.downVote.length}</p>
<img src={downvote} alt="" onClick={handleDownVote}/>

</div>
<div style={{width:"100%"}}>

<p className='question-body'>{question.questionBody}</p>
<div className="question-details-tags">

{
question.questionTags.map((tag)=>(
  <p   key={tag}>{tag}</p>
))

}


</div>
<div className="question-actions-user">
<div>

<button type='button' onClick={handleshare}>Share</button>
{
User?.result?._id === question?.userId&&(

<button type='button' onClick={handleDelete} >Delete</button>
)

}


</div>
<div>
<p>asked {moment(question.askedOn).fromNow()}</p>
<Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
<Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar> 
  <div>{question.userPosted}</div>
</Link>
</div>


</div>




</div>
</div>
</section>
{

question.noOfAnswers!== 0 && (
<section>
  <h3>{question.noOfAnswers} answers</h3>
  <DisplayAnswer key={question._id} question={question} handleshare={handleshare}/>
</section>
)

}

<section className='post-ans-container'>
<h3>Your Answer</h3>
<form onSubmit={ (e)=> {handlePostAns(e,question.answer.length)}}>

<textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value) }></textarea><br/>
<input type="submit" className='post-ans-btn'  value='Post Your Answer' />


</form>

<p>
Browse other Question tagged
{
  question.questionTags.map((tag)=>(
    <Link to='/Tags' key={tag} className='ans-tags' >{tag}</Link>
  ))
}or
<Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>ask your own question.</Link>

</p>


</section>
</div>

))

}





</>

}

</div>

    </div>
  )
}

export default QuestionsDetails