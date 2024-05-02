import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const Userlist = () => {

    const[users, setUsers]= useState([])

    const getUserList = async()=>{
        let result = await fetch("http://localhost:5000/users-list")
        result = await result.json()
        // console.log(result)
        setUsers(result)
        
    }
    // console.log("___", users)

    useEffect(()=>{
      getUserList()
    }, [])


    const deleteRecord=async(id)=>{
      // console.log(id)
      let result = await fetch(`http://localhost:5000/users-list/${id}`, { 
        method: 'delete'
      })
      result = await result.json()
      if(result){
        getUserList()

        //sweet alert
        swal("Deleted", "Record Deleted Successfull", "success", {
        button: "Okay",
        });
        
      }

    }

  return (
    <div>
      <h1 className='my-3'>Users List</h1>
      <div>
        <input id='search' className='' type='text' placeholder='Search here....' />
        <button type="">Search</button>
      </div>

        <div className='container '>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr className='bg-primary'>
                <th scope="col">Sr #</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Operations</th>

                </tr>
            </thead>
            <tbody>
              {
                users.map((ele, ind)=>{
                  return(
                    <>
                      <tr>
                        <th scope="row">{ind+1}</th>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.password}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.address}</td>
                        <td>
                            <Link to={`/update-user/${ele._id}`} className='btn btn-warning btn-sm me-2' type="">Edit</Link>
                            <button onClick={()=>deleteRecord(ele._id)} className='btn btn-success btn-sm' type="">Delete</button>

                        </td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default Userlist
