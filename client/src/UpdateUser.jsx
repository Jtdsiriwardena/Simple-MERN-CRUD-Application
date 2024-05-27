import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
        })
        .catch(err => console.log(err))
    }, [id])

    const Update = (e) => {
        e.preventDefault();
    axios.put("http://localhost:3001/UpdateUser/"+id, {name, email, age})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch (err => console.log(err))
    }

  return (
    <div>
      
       <div>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name"
                   value={name} onChange={(e) => setName(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Age"
                    value={age} onChange={(e) => setAge(e.target.value)}/><br/>
                </div>
                <button>Update</button>
            </form>
        </div>

    </div>
  )
}

export default UpdateUser;