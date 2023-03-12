import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import './Result.css';
import ResultTable from './ResultTable';
const Result = () => {
    const [{ result, question }] = useGlobalContext();

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'>matti ullah</span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'>{question.length || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total Questions : </span>
                    <span className='bold'>{question.length}</span>
                </div>

                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'>{result.points || 0}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result</span>
                    {/* style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} */}
                    <span className='bold'>{result.length}</span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/'} >Go back to the home page</Link>
            </div>

            <div className="container">
                {/* result table */}
                <ResultTable userId={result.userId} points={result.points} attempts={result.attempts} achieved={result.achieved} ></ResultTable>
            </div>
        </div>
    )
}

export default Result
