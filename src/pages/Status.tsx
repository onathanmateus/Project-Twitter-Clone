import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState(
    [
      'Concordo totalmente',
      'Uau que incrível !',
      'Você tem toda razão',
    ]
  )

  function createNewAnswer(e: FormEvent) {
    e.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(e: KeyboardEvent) {
    if (e.key == 'Enter' && (e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title='tweet' />
      
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Architecto repellat ducimus odit sit!" />
      
      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/onathanmateus.png" alt="Nathan Mateus" />
          <textarea 
            id='tweet' 
            placeholder="Tweet your answer" 
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(e) => {
              setNewAnswer(e.target.value)
            }}
          />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}