import React, { useState } from 'react'
import { useGlobalContext } from '../context/context';
import { useFetchQuestion } from '../hooks/FetchQuestion';
// custom hook



const Questions = ({ onCheck }) => {
    const [{ question, trace }, dispatch] = useGlobalContext();
    const [{ isLoading, serverError }] = useFetchQuestion();
    const questions = question[trace];


    const onSelect = (question, data, answer) => {
        if (data === answer) {
            onCheck(question, data, answer);
        }

    }


    if (isLoading) return <h4 className='text-light'>isLoading....</h4>
    if (serverError) return <h4 className='text-light'>{serverError || "Unknown server error"}</h4>
    return (
        <div className='questions'>
            <h2 className='text-light prevent-select'>{questions?.question}</h2>

            <ul key={questions?.id}>
                {
                    questions?.options?.map((data, i) => {
                        return <li key={i} >
                            <input
                                type="radio"
                                value={data}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(questions?.question, data, questions?.answer)}
                            />
                            <label className='text-primary ' htmlFor={`q${i}-option`}>{data}</label>
                            <div className={`check chec `}></div>
                        </li>

                    })
                }
            </ul>
        </div>
    )
}

export default Questions
