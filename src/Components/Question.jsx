import React from 'react'
import { useState, useEffect, useSelector, useDispatch } from 'react-redux'

export default function Question() {

  //retrieve data from store
  const [settings, setSettings] = useState([])
  const [selected, setSelected] = useState(false)
  const [correct, setCorrect] = useState(null)
  const score = useSelector(state => state.score)
  const questions = useSelector(state => state.questions)
  const index = useSelector(state => state.index)

  const dispatch = useDispatch()

  const getNum = max => {
    return Math.floor(Math.random()*Math.floor(max));
  }

  const question = question[index]
  const answer = question.correct

  //returns right and wrong answers together in a random position
  useEffect(() => {
    if (!question) {
      return;
    }
    let answers = [...question.incorrect]
    answer.splice(getNum(question.incorrect.length), 0, question.correct)
    setSettings(answers)
    }, [question])

    const handleSelection = (e) => {}
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
