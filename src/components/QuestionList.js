import React, {useEffect}from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionList, setQuestionList}) {

  // const [questionList, updateQuestionList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(resp=>resp.json())
    .then(questions=>setQuestionList(questions))
  },[])

  function handleDeleteQuestion(deletedQuestion){
    const newQuestionList = questionList.filter((question)=> question.id !==deletedQuestion.id)
    setQuestionList(newQuestionList)
  }

  function handleUpdateQuestion(updatedQuestion){
    const newQuestionList = questionList.map(question=>{
      if(question.id === updatedQuestion.id){
        return updatedQuestion
      }
      return question
    })
    setQuestionList(newQuestionList)
  }

  const questionsToDisplay = questionList.map((question)=> <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
