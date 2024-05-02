import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
 

const Register = () => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[phone, setPhone] = useState('')
    const[address, setAddress] = useState('')

    const navigate = useNavigate();

    const registerUser = async(event)=>{
        event.preventDefault();
        let result = await fetch("http://localhost:5000/users",{
            method : "post",
            body : JSON.stringify({name, email, password, phone, address}),
            headers:{
                "Content-Type": "application/json"
            }
        })

        result = await result.json();
        if(result){
            swal("Added", "Record Added Successfull", "success", {
                button: "Okay",})

            navigate('/users-list')
        }
        
        console.log(result)
        // console.log({name, email, password, phone, address})
    }


  return (
    <div>
      <h3 className='mt-3'> Sign Up Yourself</h3>

    <div className='container my-3'>
        <div className='row'>
            <div className='card w-50 m-auto'>
                <form className=''>
                    <div className="my-3 ">
                        <label htmlFor="InputName" className="form-label fs-5">Name</label>
                        <input onChange={(e)=>setName(e.target.value)} type="text" value={name} className="form-control w-75 m-auto" id="InputName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label fs-5">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} className="form-control w-75 m-auto" id="InputEmail" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label fs-5">Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} className="form-control w-75 m-auto" id="InputPassword" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPhone" className="form-label fs-5">Phone</label>
                        <input onChange={(e)=>setPhone(e.target.value)} type="text" value={phone} className="form-control w-75 m-auto" id="InputPhone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputAddress" className="form-label fs-5">Address</label>
                        <input onChange={(e)=>setAddress(e.target.value)} type="text" value={address} className="form-control w-75 m-auto" id="InputAddress" />
                    </div>
                    
                    <button onClick={registerUser} type="submit" className="btn btn-primary mb-3">Submit</button>
                </form>
            </div>
            
        </div>
    </div>

    

    </div>
  )
}

export default Register