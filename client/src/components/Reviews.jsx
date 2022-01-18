import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/apiConfig2';

const default_input = {
  firstName: "",
  review: "",
}
export default function Reviews() {

  const [users, setUsers] = useState([])

  // const [input, setInput] = useState(default_input);
  // const navigate = useNavigate();

  // const handleTextInput = (event) => {
  //   const { id, value } = event.target;

  //   setInput(prevInput => ({
  //     ...prevInput,
  //     [id]: value,
  //   }));
  // }


  useEffect(() => {
    const getReviews = async () => {
      const res = await api.get()
      console.log(res.data.records)
      setUsers(res.data.records)
    }
    getReviews()
  }, [])



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const fields = input;
  //   const res = await api.post("/", { fields });
  //   setInput(default_input);
  //   navigate("/reviews")
  // }

  return (
    <div className="bg-neutral-100 h-screen">
      <div className="p-5">
        <h1 className="text-3xl">REVIEWS</h1>
        <ul className="grid grid-cols-3 m-5">
          {users.map((user) => {
            return (
              <li className="bg-neutral-600 rounded-lg m-5 text-white" key={user.fields.firstName}>
                <div>
                  <h1>{`${user.fields.firstName}:`}</h1>
                  <p>{user.fields.review}</p>
                </div>
              </li>

            )
          })}
          {/* <h1>Leave a review</h1>

      <Form
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        type={"Create"}
      /> */}
        </ul>
        <Link className="m-5 inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center" to="/reviews/new">Leave a review</Link>
      </div>
    </div>
  )

}
