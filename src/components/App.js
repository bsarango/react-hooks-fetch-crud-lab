import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);
  
  function handleAddQuestion(newQuestion){
    const newQuestionList = [...questionList,newQuestion]
    setQuestionList(newQuestionList)
  }
    
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questionList={questionList} setQuestionList={setQuestionList}/>}
    </main>
  );
}

export default App;
