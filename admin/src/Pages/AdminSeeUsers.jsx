import React, { useState } from 'react'
import AdminNavbar from '../Components/AdminNavbar'

const AdminSeeUsers = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/show-users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      const data = await response.json()
      console.log(data)
      if(data.success){
        setUsers(data.users)
      }
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }

  return (
    <>
    <AdminNavbar  />
    <div>AdminSeeUsers</div>
    </>
  )
}

}
export default AdminSeeUsers