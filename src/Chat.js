import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./Chat.css"
import "./components/commands/Commands.css"
import {Link } from "react-router-dom";
import FancyButton from "./components/FancyButton"

//You can communicate here with the server and send messages

function Chat({Author}) {
	const [ state, setState ] = useState({ message: "", author: Author })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef()

	//conncection to the server
	useEffect(
		() => {
			socketRef.current = io.connect("https://demo-chat-server.on.ag/")
			socketRef.current.on("message", ({ author, message }) => {
				setChat([ ...chat, { author, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { author, message } = state
		socketRef.current.emit("message", { author, message })
		e.preventDefault()
		setState({ message: "", author })
	}

	//render the response messages from the server
	const renderChat = () => {
		return chat.map(({ author, message }, index) => (
			<div key={index}>
				<h3>
					{author}: <span>{message}</span>
				</h3>
			</div>
		))
	}
	


	

	/*
	Two TextFields for author and message
	One Button to send the message
	One Button to go to the server command widgets
	The rest is just for styling
	*/
	return (
		<div >
			<div id="form">
                <div id="form-inner">

					<div className="card">
						<form id="messengerStyle" onSubmit={onMessageSubmit}>
							<h1>Messenger</h1>
							<div className="name-field">
								<TextField name="author" onChange={(e) => onTextChange(e)} value={state.author} label="Name"/>
							</div>
							<div>
								<TextField
									name="message"
									onChange={(e) => onTextChange(e)}
									value={state.message}
									id="outlined-multiline-static"
									variant="outlined"
									label="Message"
								/>
							</div>
							<button className="link-button">Send Message</button>
						</form>
						<div className="render-chat">
							
									<h1>Chat Log</h1>
									{renderChat()}

						</div>
					</div>

					<div >

						<Link to="/commands">
							<FancyButton Text="Go to commands!"/>
						</Link>
					</div>

				</div>
				
				
			</div>
		</div>
	)
}

export default Chat