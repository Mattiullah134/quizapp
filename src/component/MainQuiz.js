import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import './Main.css';
const MainQuiz = () => {
    const navigate = useNavigate();
    const [{ userId }] = useGlobalContext();
    const inputRef = useRef(null);
    const [error, setError] = useState('');
    const handleAuth = () => {
        if (inputRef?.current?.value) {
            if (inputRef?.current?.value === userId) {
                navigate('/quiz', { replace: true });
                setError('');
            }
            else {
                setError('user not found');
            }
        }

    }
    return (
        <div className='contaner '>
            <h1 className='title text-light'>Quiz Application</h1>

            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one options.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            </form>
            {/* {error && < p > {error} <p />} */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='start'>
                <a className='btn' onClick={handleAuth}  >Start Quiz</a>
            </div>

        </div >
    )
}

export default MainQuiz
