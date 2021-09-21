import React from 'react'
import { Link } from 'react-router-dom'
import "./Commands.css"

function refreshPage(){ 
    window.location.reload(); 
}

function CompleteCommand({button1Text, button2Text}) {
    return (
        <div id="App">

            <div id="form">
                <div id="form-inner">

                    <h2>Do you want to close this conversation and go back to login?</h2>

                    <div id="form-group">
                        <Link to="/">
                        <button className="link-button">{button1Text}</button>
                    </Link>
                    </div>
                    <div id="form-group">
                        <button className="link-button" onClick={ refreshPage }>{button2Text}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteCommand
