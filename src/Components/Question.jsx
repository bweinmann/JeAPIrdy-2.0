import React from 'react'
import { useState, useEffect, useSelector, useDispatch } from 'react-redux'

const decoded = function (html) {
  const content = document.createElement('content')
  content.innerHTML = html
  return content.value
}

export default function Question() {

  //retrieve data from store
  const [settings, setSettings] = useState([])
  const [selected, setSelected] = useState(false)
  const [correct, setCorrect] = useState(null)
  
  const score = useSelector(state => state.score)
  const questions = useSelector(state => state.questions)
  
  const encoded = useSelector(state => state.questions)

  useEffect(() => {
  const decodedQuestions = encoded.map(q => {
    return {
      ...q,
      question: decoded(q.question),
      correct_answer: decoded(q.correct_answer),
      incorrect_answer: q.incorrect_answer.map(a => decoded(a))
    }
  })
  setQuestions(decodedQuestions)
  }, [encoded])

  const index = useSelector(state => state.index)
  const dispatch = useDispatch()

  const question = question[index]
  const answer = question.correct

  const getNum = max => {
    return Math.floor(Math.random()*Math.floor(max));
  }

  //returns right and wrong answers together in a random position
  useEffect(() => {
    if (!question) {
      return;
    }
    let answers = [...question.incorrect]
    answer.splice(getNum(question.incorrect.length), 0, question.correct)
    setSettings(answers)
    }, [question])

    const handleSelection = (e) => {
      setSelected(true)
      setCorrect(e.target.textContent)
      if (e.target.textContent === answer) {
        dispatch({
          type: 'SET_SCORE',
          score: score + 1,
        })
      }
      if (index + 1 <= questions.length) {
        setTimeout(() => {
          setSelected(false)
          setCorrect(null)
          dispatch({
            type: 'SET_INDEX',
            index: index + 1,
          })
        }, 2500)
      }
    }
      return (
      <div>
        <p>Question {index + 1}</p>
        <h3>{question.question}</h3>
        <ul>
          {settings.map((setting, i) => (
            <li key={i} onClick={handleSelection}>
              {setting}
            </li>
          ))}
        </ul>
        <div>
          Score: {score} / {questions.length}
        </div>
      </div>
  )
}
