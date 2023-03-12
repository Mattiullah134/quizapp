// import { useState } from "react"

// const [points, setPoints] = useState(0)
export const earnPoints = (answer, result) => {
    let points = 0;
    result[0]?.map((data, i) => {
        if (data === answer[i]) {
            ++points;
        } else {
            if (!points < 0) {
                --points;
            }
        }
        // console.log('data ', data);
        // console.log('answer ', answer[i]);
    })
    return points;
}