import React, { useState } from 'react';
import axios from "axios";

// import { answer } from '../database/data';
import './AddQuiz.css';
const addQuizInit = {
    question: "",
    option: [],
    answer: [],
}
const AddQuiz = () => {
    const [isSave, setIsSafe] = useState(false);
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [courseType, setCourseType] = useState('');
    const [quizNumber, setQuizNumber] = useState(1);
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState('');
    const [questions, setQuestions] = useState([]);
    let quiz = 0;
    const changeHandler = (e) => {
        if (e.target.name === 'noofquiz') {
            setQuizNumber(e.target.value)
        }
        else if (e.target.name === 'typeofcourse') {
            setCourseType(e.target.value)
        }
        else if (e.target.name === 'question') {
            setQuestion(e.target.value)
        }
        else if (e.target.name === 'option1') {
            if (e.target.value !== '') {
                setOption1(e.target.value)
            }
        }
        else if (e.target.name === 'option2') {
            if (e.target.value !== '') {
                setOption2(e.target.value)
            }
        }
        else if (e.target.name === 'option3') {
            if (e.target.value !== '') {
                setOption3(e.target.value)
            }
        }
        else if (e.target.name === 'option4') {
            if (e.target.value !== '') {
                setOption4(e.target.value)
            }
        }

        else if (e.target.name === 'answer') {
            setAnswer(e.target.value)
        }

        setOptions([option1, option2, option3, option4]);
    }
    const handleQuizData = () => {
        if (question.length > 0 && +quizNumber > 0) {
            setOptions([option1, option2, option3, option4]);
            setQuizNumber((prev) => { return --prev });
            setQuestions((prev) => {
                return [...prev, { question, options, answer }]
            });
        } else {
            return;
        }
    }
    const addQuiz = async (e) => {
        e.preventDefault();
        console.log();
        if (questions.length > 0) {
            console.log(questions);
        }
        if (+quizNumber <= 0) {

            // console.log(questions, courseType);
            console.log('after quiz number', questions);
            setCourseType('');

            let resData = await axios.post('http://localhost:8000/api/questions', {
                questions, courseType
            });

            console.log(resData.data.data[0].questions);
            setIsSafe(true);
            alert('quiz database main ja rahy hain');
        }
        setIsSafe(false)
        setQuestion('');
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
        setOptions([]);
        setAnswer('');

    }
    return (
        <div className="addQuizContainer">

            <form onSubmit={addQuiz} className='form flex column-direction justify-content-center align-item-center' >
                <div className='w-80 mtb'>
                    <label className='noofquiz' htmlFor="question">No of quiz</label><br />
                    <input className='inputQuestion' onChange={changeHandler} name='noofquiz' type="text" placeholder='1' />
                </div>
                <div className='w-80 mtb'>
                    <label className='noofquiz' htmlFor="typeofcourse">type of course</label><br />
                    <input className='inputQuestion' onChange={changeHandler} name='typeofcourse' type="text" value={courseType} placeholder='Data Base' />
                </div>
                <div className='w-80 mtb'>
                    <label className='labelName' htmlFor="question">Question</label><br />
                    <input className='inputQuestion' value={question} name='question' onChange={changeHandler} type="text" placeholder='Add the question....' />
                </div>
                <div className='w-80 mtb'>
                    <label className='labelName' value={option1} htmlFor="option1">Option 1</label><br />
                    <input className='inputQuestion' name='option1' onChange={changeHandler} type="text" placeholder='Option 1....' />
                </div>
                <div className='w-80 mtb'>
                    <label className='labelName' value={option2} htmlFor="option2">Option 2</label><br />
                    <input className='inputQuestion' name='option2' onChange={changeHandler} type="text" placeholder='Option 2....' />
                </div>
                <div className='w-80 mtb'>
                    <label className='labelName' value={option3} htmlFor="option3">Option 3</label><br />
                    <input className='inputQuestion' name='option3' onChange={changeHandler} type="text" placeholder='Option 3....' />
                </div>
                <div className='w-80 mtb'>
                    <label className='labelName' value={option4} htmlFor="option4">Option 4</label><br />
                    <input className='inputQuestion' name='option4' onChange={changeHandler} type="text" placeholder='Option 4....' />
                </div>
                <div className='w-80 mtb'>
                    <label className='labelName' htmlFor="answer">Answer</label><br />
                    <input className='inputQuestion' value={answer} name='answer' onChange={changeHandler} type="text" placeholder='Answer  ' />
                </div>
                <div>
                    <button onClick={handleQuizData} type='submit' className='addQuizButton'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddQuiz
