import { React } from 'react'

export default function Form(props) {
  const { firstName, review } = props.input;

  return (
    <form onSubmit={props.handleSubmit}>
      <div class="bg-neutral-500 min-h-screen md:px-20 pt-6">
        <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">ADD REVIEW</h1>
          <div class="space-y-4">
            <div>
              <textarea id="review" value={review} placeholder="Review..." onChange={props.handleTextInput} cols="30" rows="10" className="w-full font-serif  p-4 text-gray-600 bg-slate-100 outline-none rounded-md"></textarea>
            </div>
            <div>
              <label for="name" class="text-lx">Name:</label>
              <input id="firstName" value={firstName} placeholder="Name" onChange={props.handleTextInput} className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
            </div>
            <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">{props.type}</button>
          </div>
        </div>
      </div>
    </form>
  )
}

// https://tailwindcomponents.com/component/form-add-posts