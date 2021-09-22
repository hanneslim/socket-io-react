import React, {useState} from "react";
import Chat from "./Chat";
import LoginForm from "./components/LoginForm";



function App(){

	//Dummy Login. The username doesn't matter, only the password is important
	const adminUser={
		password: "admin123"
	}

	const [user, setUser]= useState({author:""})
	const [error, setError] = useState("")
	
	//check if the login was successfull
	const Login = details =>{
		console.log(details);

		if (details.password===adminUser.password){
			//console.log("Logged in");
			setUser({
				author: details.author
			})
		}
		else{
			//console.log("Password is wrong!")
			setError("Password is wrong!");
		}
	}

	//if the Login is successfull, the next page will be the messenger, otherwise it will stay at the login mask
	return(
		<div className="App">
			{(user.author !=="") ? (
				<Chat Author={user.author}/>
			): (
				<LoginForm Login={Login} error={error}/>
			)}
		</div> 
	);
}


export default App;