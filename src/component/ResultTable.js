import React, { useEffect, useState } from 'react'
// import axios from "axios";
const ResultTable = ({ userId, attempts, points, achieved }) => {

    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attemps</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-body'>
                        <td>{userId}</td>
                        <td>{attempts}</td>
                        <td>{points}</td>
                        <td>{achieved}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable
