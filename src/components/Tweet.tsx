import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

export function Tweet() {
  return (
    <a href='#' className="tweet">
      <img src="https://github.com/onathanmateus.png" alt="Nathan Mateus" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Nathan Mateus</strong>
          <span>@onathanmateus</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi autem sit? Asperiores, accusamus debitis!
        </p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  )
}