import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers, setCurrentUsers } from '../features/userSlice'
import { selectUsers,selectCurrentUser } from '../features/userSlice'
import User from './User'

const Users = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    
    

    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => dispatch(setUsers(data.data)))
        .then(setLoading(false))
    }, [])
    
    const user = useSelector(selectUsers)
    const current = useSelector(selectCurrentUser)

  
  return (
    <>
   {loading ? <h1>Loading...</h1> : (
     <div className='Container'>
     {current && 
     <div className='User_Info'>
       <img src={current?.avatar} alt="" />
       <h2>{current?.first_name} {current?.last_name}</h2>
       <span>{current?.email}</span>
     </div>
}
{!current &&
     <div className='User_Info'>
       <h2>Click on a Button to see more info</h2>
       </div>}
     <div className='Users'>
     {user?.map((user) => (
     <User key={user.id} user={user}/>))}
     </div>
 </div>
 
     
   )}
    </>
  )
}

export default Users