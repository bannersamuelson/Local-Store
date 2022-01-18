import { React } from 'react'

export default function Form(props) {
  const { firstName, review } = props.input;

  return (
    <form onSubmit={props.handleSubmit}>
      <label>Name</label>
      <input id="firstName" value={firstName} placeholder="Name" onChange={props.handleTextInput} />
      <br />
      <label>Review</label>
      <input id="review" value={review} placeholder="Review" onChange={props.handleTextInput} />
      <button>Submit</button>
    </form>
  )
}
