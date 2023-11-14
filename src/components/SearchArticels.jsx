import { useState } from "react"

const SearchArticels = ({ searchText }) => {

  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    searchText(text)
  }
  return (
    <>
      <div className="container mt-5 mb-5 bg-image ">
        <div className="text-center ">
          <form action="" onSubmit={handleSubmit} className="d-inline-block">
            <div className="mb-3 gap-2 d-flex ">
           
              <input type="text" className="form-control w-auto " placeholder="example:books"  
                onChange={(e) => setText(e.target.value)}     
               />
               
              <button type='submit' className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SearchArticels