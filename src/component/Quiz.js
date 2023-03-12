import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import Questions from './Questions';
import './Quiz.css';



const Quiz = () => {
    const navigate = useNavigate();

    const [{ trace, question, result, userId }, dispatch] = useGlobalContext();
    console.log(userId);
    const [check, setCheck] = useState([]);
    const onNext = async () => {
        if (trace !== question.length - 1) {
            dispatch({
                type: "SET_TRACE",
                trace: trace + 1,
            })
        }
        else {
            // calculate the result
            let achieved = ((+check.length / +question.length) * 100 > 50) ? 'PASSED' : 'FAIL';

            const quizResult = await axios.post('http://localhost:8000/api/result', {
                check, userId, attempts: check.length, points: check.length, achieved
            });
            dispatch({
                type: 'SET_RESULT',
                result: quizResult.data,
            })
            console.log(result);
            navigate('/result', { replace: true });
        }
    }

    const onPrev = () => {
        if (trace > 0) {
            dispatch({
                type: "SET_TRACE",
                trace: trace - 1
            })
        }
    }
    const onCheck = (question, data, answer) => {

        setCheck(prev => {
            return [...prev, { question, data, answer }]
        })



    }
    // console.log('answer', answer);
    console.log('result ', result)
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz application</h1>
            <Questions onCheck={onCheck} />
            <div className='grid'>
                {/* <button className='btn prev' onClick={onPrev}>Prev</button> */}
                <div></div>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz
