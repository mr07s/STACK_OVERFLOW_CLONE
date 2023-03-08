import React from 'react'
import { useSelector } from 'react-redux'
import {Link,useLocation, useNavigate} from 'react-router-dom'
import AskQuestion from '../../../pages/AskQuestion/AskQuestion'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

const questionList =useSelector(state => state.questionsReducer)
console.log(questionList)

// var questionList =[{
// _id:1,
// upVotes:3,
// downVotes:2,
// noOfAnswers:2,
// userId:1,
// questionTitle:"What is a function",
// questionBody:"It meant to be ",
// questionTags:["java","node js","react js","mongo db"],
// userPosted:"mano",
// askedOn:"jan 1",
// answer:[{

// answerBody:"Answer",
// userAnswered:'Kumar',
// answeredOn:"jan 2",
// userId:2,
// }]


// },{
//   _id:2,
//   upVotes:0,
//   downVotes:2,
//   noOfAnswers:0,
//   userId:1,
//   questionTitle:"What is a function",
//   questionBody:"It meant to be ",
//   questionTags:["javascript","R","python"],
//   userPosted:"mano",
//   askedOn:"jan 1",
//   answer:[{

//     answerBody:"Answer",
//     userAnswered:'Kumar',
//     answeredOn:"jan 2",
//     userId:2,
//     }]
    
// },{
//    _id:3,
//   upVotes:0,
//   downVotes:2,
//   noOfAnswers:0,
//   userId:1,
//   questionTitle:"What is a function",
//   questionBody:"It meant to be ",
//   questionTags:["javascript","R","python"],
//   userPosted:"mano",
//   askedOn:"jan 1",
//   answer:[{

//     answerBody:"Answer",
//     userAnswered:'Kumar',
//     answeredOn:"jan 2",
//     userId:2,
//     }]
    
// }]


const user=1;
const navigate = useNavigate();

const redirect =()=>{
    alert("Log in or sign up to ask question")
    navigate('/Auth');
}
const checkAuth=()=>{
  
  
  if(user==null){redirect()}
  else{
    navigate('/AskQuestion');
  }


}


const location =useLocation()

  return (
    <div className="main-bar">
<div className="main-bar-header">
{
  location.pathname==='/'? <h1>Top Questions</h1>:<h1>All Questions</h1>
}
<button  onClick={checkAuth}  className='ask-btn'>Ask Questions</button>
</div>
<div>
{
  questionList.data===null? <h1>Loading...</h1>:
  <>
  <p>{questionList.data.length} questions</p>

<QuestionList questionList={questionList.data
}/>


  </>
}
</div>
  </div>
  )
}

export default HomeMainbar