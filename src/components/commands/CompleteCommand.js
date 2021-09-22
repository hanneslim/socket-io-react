import React from 'react'
import { Link } from 'react-router-dom'
import FancyButton from '../FancyButton';
import "./Commands.css"

function refreshPage(){ 
    window.location.reload(); 
}

//A widget which simply asks you if you want to stay or leave the page

function CompleteCommand({button1Text, button2Text}) {
    return (
        <div id="App">

            <div id="form">
                <div id="form-inner">

                    <h2>Do you want to close this conversation and go back to login?</h2>

                    <div id="form-group">
                        <Link to="/">
                        <FancyButton Text={button1Text}/>
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
