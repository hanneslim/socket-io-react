
import React from 'react'
import "./FancyButton.css"

function FancyButton({Text}) {
    return (
        <div>
            <button className="link-button" >{Text}</button>
        </div>
    )
}

export default FancyButton
