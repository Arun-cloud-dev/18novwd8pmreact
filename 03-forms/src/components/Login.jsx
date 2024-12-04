import React, { useState } from "react";





export default function Login() {
    const [enteredEmail, setEnteredEmail] =  useState('');
    const [enteredPassword, setenteredPassword] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        console.log('User Email : '+ enteredEmail);




    }
    function handleEmailChange(event){
        setEnteredEmail(event.target.value);

    }


  return(
    
    <form onSubmit={handleSubmit} >
        <h2>Login</h2>

        <div className="control-row">
            <div className="control no-margin">
                <label htmlFor="email">Email</label>
                <input 
                id="email" 
                type="email" 
                name="email" 
                onChange={handleEmailChange}
                value={enteredEmail}
                />
            </div>

            <div className="control no-margin">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" />
            </div>
           
        </div>

        <p className="form-actions">
            <button className="button button-flat">
                Reset
            </button>
            <button className="button" onClick={handleSubmit}>
                Login
            </button>
        </p>

        
    </form>
  );
}