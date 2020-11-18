import React, { useReducer, useState } from 'react'
import UrlList from './url-list'
// import { nanoid } from 'nanoid'

interface IURLProps {
  addUrl: (url: string) => void
  //   url: URL[]
}

function URLForm({ addUrl }: IURLProps) {
  const [url, setUrl] = useState('')

  function submitUrl(event: React.FormEvent) {
    event.preventDefault()
    addUrl(url)
    setUrl('')
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value)
  }

  return (
    <div>
      <div className="url">
        <form className="url__url-container" onSubmit={submitUrl}>
          <span>
            <input
              type="text"
              value={url}
              className="url__url-form"
              placeholder="Shorten a link here..."
              onChange={handleChange}
            />
            <button className="url__url-button u-button-url-active">
              Shorten It!
            </button>
          </span>
        </form>
      </div>
      <UrlList />
    </div>
  )
}

export default URLForm
