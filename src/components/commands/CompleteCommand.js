import React from 'react'
import { Link } from 'react-router-dom'

function refreshPage(){ 
    window.location.reload(); 
}

function CompleteCommand({button1Text, button2Text}) {
    return (
        <div>
            <h2>Do you want to close this conversation and go back to login?</h2>

            <div>
                <Link to="/">
				<button>{button1Text}</button>
			</Link>
            </div>
            <div>
				<button onClick={ refreshPage }>{button2Text}</button>
            </div>
        </div>
    )
}

export default CompleteCommand
