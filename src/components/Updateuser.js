import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';


const Updateuser = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
//   const [data, setData] = useState([]);
  const navigate = useNavigate();

  const params = useParams();

    //getting specific user data
    const getSingleUser = async() =>{
        let res = await fetch(`http://localhost:5000/suser/${params.id}`)
        res = await res.json();
        setName(res.name)
        setEmail(res.email)
        setPassword(res.password)
        setPhone(res.phone)
        setAddress(res.address)
        
    }

    //updating data 
    const updateData = async(e) =>{
        e.preventDefault();
    let res = await fetch(`http://localhost:5000/update-user/${params.id}`,{
        method: "put",
        body: JSON.stringify({name, email, password, phone, address}),
        headers:{
            "Content-Type": "Application/json"
        }
    })
    res = await res.json();
    console.log(res);
    if(res){
            swal("Updated", "Record Updated Successfull", "success", {
            button: "Ok",})

            navigate('/users-list');
    }
    }

  useEffect(() => {
    getSingleUser();
  }, [])


  return (

    <div>
        <h3 className='mt-3'>Update User</h3>

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
                        
                        <button onClick={updateData} type="submit" className="btn btn-primary mb-3">Update</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Updateuser;
