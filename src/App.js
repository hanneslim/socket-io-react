import React, {useState} from "react";
import Chat from "./Chat";
import LoginForm from "./components/LoginForm";

function App(){
	const adminUser={
		password: "admin123"
	}

	const [user, setUser]= useState({author:""})
	const [error, setError] = useState("")
	
	const Login = details =>{
		console.log(details);

		if (details.password===adminUser.password){
			console.log("Logged in");
			setUser({
				author: details.author
			})
		}
		else{
			console.log("Password is wrong!")
			setError("Password is wrong!");
		}
	}
/*
	const Logout = () => {
		setUser({author:"", password:""});
	}
*/	
	return(
		<div>
			{(user.author !=="") ? (
				<Chat Author={user.author}/>
			): (
				<LoginForm Login={Login} error={error}/>
			)}
		</div> 
	);
}


export default App;