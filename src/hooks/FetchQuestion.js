import axios from "axios";
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/context";
export const useFetchQuestion = () => {
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });
    const [state, dispatch] = useGlobalContext();
    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));
        (
            async () => {
                try {
                    let ran = await axios.get('http://localhost:8000/api/questions/MernStack');
                    // console.log('data from the data base', ran.data[0].questions);
                    if (ran.data[0].questions.length > 0) {
                        setGetData(prev => ({ ...prev, isLoading: false }));
                        setGetData(prev => ({ ...prev, apiData: ran.data[0].questions }));

                        dispatch({
                            type: "SET_QUESTION",
                            question: ran.data[0].questions
                        })

                    } else {
                        throw new Error('No Question available');
                    }
                } catch (error) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, serverError: error }));
                }
            })();
    }, []);
    return [getData, setGetData];
}

