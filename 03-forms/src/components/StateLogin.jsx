import React, { useState } from "react";





export default function Login() {
    // const [enteredEmail, setEnteredEmail] =  useState('');
    // const [enteredPassword, setenteredPassword] = useState('');
    

const [enteredValues , setEnteredValues] = useState({
    email :'',
    password: '',
    
})

const emailIsInvalid = !enteredValues.email.includes('@')



    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredValues)
        setEnteredValues({

        })

    }

    function handleInputChange(identifirer ,value){
        setEnteredValues(prevvalues => ({
            ...prevvalues, 
            [identifirer]: value 
        }))
    }

    // function handleEmailChange(event){
    //     setEnteredEmail(event.target.value);

    // }
    // function handlepasswordChange(event ){
    //     setenteredPassword(event.target.value);
    // }


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
                onChange={(event) => (handleInputChange('email',event.target.value))}
                value={enteredValues.email}
                />
                <div className="control-error">
                    {emailIsInvalid && <p>Please enter the valid email address </p>}
                </div>
            </div>

            <div className="control no-margin">
                <label htmlFor="password">Password</label>
                <input 
                id="password" 
                type="password" 
                name="password" 
                onChange={(event) => (handleInputChange('password',event.target.value))}
                value={enteredValues.password}
                />
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