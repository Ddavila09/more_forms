import React, { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    let [listOfPeople, setListOfPeople] = useState([])

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("Title is required!");
        } else if (e.target.value.length < 3) {
            setFirstNameError("Title must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Title is required!");
        } else if (e.target.value.length < 3) {
            setLastNameError("Title must be 3 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Title is required!");
        } else if (e.target.value.length < 3) {
            setEmailError("Title must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Title is required!");
        } else if (e.target.value.length < 3) {
            setPasswordError("Title must be 3 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("Title is required!");
        } else if (e.target.value.length < 3) {
            setConfirmPasswordError("Title must be 3 characters or longer!");
        } else {
            setConfirmPasswordError("");
        }
    }


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form Submitted", firstName, lastName, email, password, confirmPassword)
        let peopleObj = { firstName, lastName, email, password, confirmPassword }
        setListOfPeople([...listOfPeople, peopleObj])
    }


        return (
            <div>
                <form onSubmit={submitHandler}>
                    <div className='form-group'>
                        <label>First Name:</label>
                        <input onChange={handleFirstName} type='text' className='form-control' />
                        {firstNameError ? <p>{firstNameError}</p> : ''}
                    </div>
                    <div className='form-group'>
                        <label>Last Name:</label>
                        <input onChange={handleLastName} type='text' className='form-control' />
                        {lastNameError ? <p>{lastNameError}</p> : ''}
                    </div>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input onChange={handleEmail} type='text' className='form-control' />
                        {emailError ? <p>{emailError}</p> : ''}
                    
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input onChange={handlePassword} type='text' className='form-control' />
                        {passwordError ? <p>{passwordError}</p> : ''}
                    
                    </div>
                    <div className='form-group'>
                        <label>Confirm Password:</label>
                        <input onChange={handleConfirmPassword} type='text' className='form-control' />
                        {confirmPasswordError ? <p>{confirmPasswordError}</p> : ''}
                    
                    </div>
                    <button className='btn btn-outline-success mt-3' type='submit'> Submit </button>
                </form>
                <hr />

                {/* <div>
                    <p>First Name: {firstName}</p >
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div> */}
            </div>
        )
}

export default Form