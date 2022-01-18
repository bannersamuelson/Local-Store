import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from './Form'
import api from '../services/apiConfig2';

const default_input = {

  firstName: "",
  review: "",
};

export default function NewReview() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();

  const handleTextInput = (event) => {
    const { id, value } = event.target;

    setInput(prevInput => ({
      ...prevInput,
      [id]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("/", { fields });
    setInput(default_input);
    navigate("/reviews")
  }


  return (
    <div>
      Add a Review
      <Form
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        type={"Create"}
      />
    </div>
  )
}
