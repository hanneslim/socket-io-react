
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import MapCommand from "./commands/MapCommand"


function GetCommands () {

    const [commandData, setCommandData ] = useState({})
    const socketRef = useRef()

	useEffect(
		() => {
			socketRef.current = io.connect("https://demo-chat-server.on.ag/")
            socketRef.current.emit('command');
			socketRef.current.on('command', ({ author, command })=> {setCommandData({ author, command })});
			return () => socketRef.current.disconnect()
		},
		[]
	)

    var typeData= commandData.command?.type

    

    var render;

    if(typeData==="map"){render=<MapCommand/>}
    else if(typeData==="complete") {render= <span>Hier Complete rendern!</span>}
    else if(typeData==="date") {render= <span>Hier Date rendern!</span>}
    else {render=<span>Hier Rate rendern!</span>}


    return (
        <div>
            {render}
        </div>
    )
}

export default GetCommands
