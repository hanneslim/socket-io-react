
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import CompleteCommand from "./commands/CompleteCommand"
import DateCommand from "./commands/DateCommand"
import MapCommand from "./commands/MapCommand"
import RateCommand from "./commands/RateCommand"

//This component handles the different server commands for the widgets

function GetCommands () {

    const [commandData, setCommandData ] = useState({})
    const socketRef = useRef()

    //connection to the server
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

    console.log(commandData.command)

   
    

    var render;

    //Depending on the type of data from the server the corresponding widget gets rendered
    if(typeData==="map"){
        const lat=commandData.command?.data?.lat 
        const lng=commandData.command?.data?.lng     
        render=<MapCommand lat={lat} lng={lng}/>}
    else if(typeData==="complete") {
        const button1 = commandData.command?.data[0]
        const button2 = commandData.command?.data[1]
        render= <CompleteCommand button1Text={button1} button2Text={button2}/>}
    else if(typeData==="date") {
        const date= commandData.command?.data
        render= <DateCommand date={date}/>}
    else {render=<RateCommand/>}



    return (
        <div>
            {render}
        </div>
    )
}

export default GetCommands
