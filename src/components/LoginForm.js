import React, {useState} from 'react'

function LoginForm({Login, error}) {
    const[details, setDetails]= useState({author: "", password:""})

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    const onTextChange = (e) => {
		setDetails({ ...details, [e.target.name]: e.target.value})
	}

    return (
        <form onSubmit={submitHandler}>
            <div>
                <h2>Login</h2>
                {(error !== "")? (<div>{error}</div>) : ""}
                <div>
                    <label htmlFor="author">Name:</label>
                    <input type="text" name="author" id="author" onChange={e=>onTextChange(e)} value={details.author}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e=>onTextChange(e)} value={details.password}/>
                    <label>It's a dummy! Use password "admin123" to login!</label>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    );
}

export default LoginForm
