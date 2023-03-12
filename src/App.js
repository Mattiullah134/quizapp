import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddQuiz from './component/AddQuiz';
import MainQuiz from "./component/MainQuiz";
import Quiz from "./component/Quiz";
import Result from "./component/Result";
function App() {


  // if (performance && performance.runtime && performance.runtime.id) {
  //   console.log("Extension detected");
  // }

  return (
    <div className="App w-full h-full">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<MainQuiz />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
          <Route path='/addquiz' element={<AddQuiz />} />
          <Route path='*' element={<div>page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
