import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import "./Commands.css"

function RateCommand() {
    const [rating, setRating] = useState(0) // initial rating value
    
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div id="App">

      <div id="form">
        <div id="form-inner">
          <h2>Please rate your experience with this application: </h2>
          <div id="form-group">
              <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
          </div>
          
          <div id="form-group">
            <label>You rated with {rating} star(s)!</label>
          </div> 
          <div id="form-group">
                  <Link to="/">
          <button className="link-button">Go back to Login</button>
        </Link>
              </div>

        </div>
      </div>
    </div>
  )
}

export default RateCommand
