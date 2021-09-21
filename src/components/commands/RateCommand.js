import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

function RateCommand() {
    const [rating, setRating] = useState(0) // initial rating value
    
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div >
        <h2>Please rate your experience with this application: </h2>
        <div>
            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        </div>
        
        <div>
           <h3>You rated with {rating} star(s)!</h3>
        </div> 
        <div>
                <Link to="/">
				<button>Go back to Login</button>
			</Link>
            </div>
    </div>
  )
}

export default RateCommand