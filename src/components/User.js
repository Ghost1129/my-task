import React from 'react'
import { useDispatch } from 'react-redux'
import { setUsers, setCurrentUser } from '../features/userSlice'

const User = ({user}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        fetch(`https://reqres.in/api/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => dispatch(setCurrentUser(data.data)));
    }

  return (

        <div className='User_Container' onClick={handleClick}>
            <span>{user?.id}</span>
        </div>
  )
}

export default User