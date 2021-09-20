import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./Chat.css"
import {Link } from "react-router-dom";

function Chat({Author}) {
	const [ state, setState ] = useState({ message: "", author: Author })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef()

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

	const renderChat = () => {
		return chat.map(({ author, message }, index) => (
			<div key={index}>
				<h3>
					{author}: <span>{message}</span>
				</h3>
			</div>
		))
	}
	


	

	return (
		<div className="card">
			<form onSubmit={onMessageSubmit}>
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
				<button>Send Message</button>
			</form>
			<div className="render-chat">
				<h1>Chat Log</h1>
				{renderChat()}
			</div>
			<Link to="/commands">
				<button>Go to commands!</button>
			</Link>
			
		</div>
	)
}

export default Chat