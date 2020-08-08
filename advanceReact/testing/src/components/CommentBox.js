import React, { useState } from 'react'

const CommentBox = () => {

  const [comment, setComment] = useState('')
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    setComment('')
    // TODO call action creator save comment
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea 
      value ={comment}
      onChange={(e)=>setComment(e.target.value)}
      />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
}

export default CommentBox
