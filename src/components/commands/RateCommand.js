import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import FancyButton from '../FancyButton'
import "./Commands.css"

//A component for rating

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
                  <FancyButton Text="Go back to Login"/>
        </Link>
              </div>

        </div>
      </div>
    </div>
  )
}

export default RateCommand
