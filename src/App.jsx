import { useEffect, useState } from "react"
import Modal from "./components/Modal/Modal"
import Users from "./components/Users/Users"

function App() {
  const [newUser, setNewUser] = useState(false)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch('http://localhost:5000/all-user')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  function addNewUserToState(user) {
    const newUsers = [...users]
    newUsers.push(user)
    setUsers(newUsers)
  }

  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-center font-bold text-4xl my-4">User list</h3>
      {
        loading ? <p>Loading...</p>
          :
          <Users users={users} setNewUser={setNewUser} setUserData={setUserData} />
      }
      {
        !newUser ?
          <button onClick={() => {
            setNewUser(true)
            setUserData({})
          }} className="bg-blue-500 px-4 py-2 my-4 rounded-md text-white">Add user</button>
          :
          undefined
      }
      <Modal newUser={newUser} setNewUser={setNewUser} addNewUserToState={addNewUserToState} userData={userData} users={users} setUsers={setUsers} />
    </div>
  )
}

export default App
