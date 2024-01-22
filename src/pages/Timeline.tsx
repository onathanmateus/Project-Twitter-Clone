import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState(
    [
      'Meu primeiro tweet !',
      'Olha mãe eu to no Twitter !!',
      'Fala pessoal !',
    ]
  )

  function createNewTweet(e: FormEvent) {
    e.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(e: KeyboardEvent) {
    if (e.key == 'Enter' && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      <Header title='Home' />
      
      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/onathanmateus.png" alt="Nathan Mateus" />
          <textarea 
            id='tweet'
            value={newTweet} 
            placeholder="What's happening ?"
            onKeyDown={handleHotkeySubmit}
            onChange={(e) => {
              setNewTweet(e.target.value)
            }}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}