import React, { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")

    // let [listOfPeople, setListOfPeople] = useState([])

        return (
            <div>
                <form>
                    <div className='form-group'>
                        <label>First Name:</label>
                        <input onChange={(e) => setFirstName(e.target.value)} type='text' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Last Name:</label>
                        <input onChange={(e) => setLastName(e.target.value)} type='text' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type='text' className='form-control' />
                    
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input onChange={(e) => setPassword(e.target.value)} type='text' className='form-control' />
                    
                    </div>
                    <div className='form-group'>
                        <label>Confirm Password:</label>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} type='text' className='form-control' />
                    
                    </div>
                    <button className='btn btn-outline-success mt-3' type='submit'> Submit </button>
                </form>
                <hr />

                <div>
                    <p>First Name: {firstName}</p >
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            </div>
        )
}

export default Form