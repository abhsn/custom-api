import { useState } from "react"

function App() {
  const [newUser, setNewUser] = useState(false)
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-center font-bold text-4xl my-4">User list</h3>
      <table className="w-full border-collapse border-2 [&>thead>tr>th]:border-2 [&>tbody>tr>td]:border-2">
        <thead>
          <tr>
            <th>Count</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody className="[&>tr>td]:text-center">
          <tr>
            <td>1</td>
            <td>Abid Hasan</td>
            <td>ab1dh4san@gmail.com</td>
            <td>+8801234567890</td>
            <td>https://example.com</td>
          </tr>
        </tbody>
      </table>
      {
        !newUser ?
          <button onClick={() => setNewUser(true)} className="bg-blue-500 px-4 py-2 my-4 rounded-md text-white">Add user</button>
          :
          <button onClick={() => setNewUser(false)} className="bg-red-500 px-4 py-2 my-4 rounded-md text-white">Cancel</button>
      }
    </div>
  )
}

export default App
