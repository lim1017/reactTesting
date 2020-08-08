import React, { useState } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'

const CommentBox = (props) => {

  const [comment, setComment] = useState('')
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    setComment('')
    // TODO call action creator save comment
    props.saveComment(comment)
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

const mapStateToProps = (state)=>{
  return {state}
}

export default connect(null, actions)(CommentBox)
