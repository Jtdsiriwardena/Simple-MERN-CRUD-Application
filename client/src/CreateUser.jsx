import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

   const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch (err => console.log(err))
   }

  return (
    <div>
        <div>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" name="name"
                    onChange={(e) => setName(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" name="email"
                    onChange={(e) => setEmail(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Age" name="age"
                    onChange={(e) => setAge(e.target.value)}/><br/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    </div>
  )
}

export default CreateUser;