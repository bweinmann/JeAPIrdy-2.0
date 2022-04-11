import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Fetch(props) {

    //construct settings for the API query
    const difficulty = useSelector(state => state.settings.question_difficulty)
    const category = useSelector(state => state.settings.question_category)
    const number = useSelector(state => state.settings.question_number)
    const type = useSelector(state => state.settings.question_type)
    const index = useSelector(state => state.index)

    const dispatch = useDispatch();

    const setLoading = (value) => {
        dispatch({
            type: 'CHANGE_LOADING',
            loading: value,
        })
    }

    const setQuestions = value => {
        dispatch({
            type:'SET_QUESTIONS',
            questions: value
        })
    }

    const handleRequest = async () => {

        let apiURL = `https://opentdb.com/api.php?amount=${number}`;

        if (category.length) {
            apiURL = apiURL.concat(`&category=${category}`)
        }
        if (difficulty.length) {
            apiURL = apiURL.concat(`&difficulty=${difficulty}`)
        }
        if (type.length) {
            apiURL = apiURL.concat(`&type=${type}`)
        }
        await fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            setQuestions(response.results)
            setLoading(false)
        })
    }
  return (
    <button onClick={handleRequest}>{props.text}</button>
  )
}
