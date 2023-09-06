import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    // console.log("Inside question:",id)
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
    })
    .then(resp=>resp.json())
    .then(()=>onDeleteQuestion(question))
  }

  function handleAnswerChange(event){
    const newCorrectIndex= event.target.value
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "correctIndex" : newCorrectIndex,
      })
    })
    .then(resp=>resp.json())
    .then(updatedQuestion => onUpdateQuestion(updatedQuestion))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
