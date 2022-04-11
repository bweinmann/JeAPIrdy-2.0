import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Question() {

  //retrieve data from store
  const score = useSelector(state => state.score)
  const questions = useSelector(state => state.questions)
  const index = useSelector(state => state.index)

  const dispatch = useDispatch()

  const question = question[index]
  const answer = question.correct

  return (
    <div>Question</div>
  )
}
