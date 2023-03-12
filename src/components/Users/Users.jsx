export default function Users({ users, setNewUser, setUserData }) {
	const handleSetUserData = id => {
		setNewUser(true)
		const user = users.filter(user => user._id === id)
		setUserData(user[0])
	}

	return (
		<table className="w-full border-collapse border-2 [&>thead>tr>th]:border-2 [&>tbody>tr>td]:border-2">
			<thead>
				<tr>
					<th>Count</th>
					<th>Name</th>
					<th>Age</th>
					<th>Verified</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Website</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody className="[&>tr>td]:text-center">
				{
					users.map((user, idx) => {
						const { _id, name, age, verified, email, phone, website } = user
						return (
							<tr key={_id}>
								<td>{idx + 1}</td>
								<td>{name}</td>
								<td>{age}</td>
								<td>{verified?.toString()}</td>
								<td>{email}</td>
								<td>{phone}</td>
								<td>{website}</td>
								<td className="py-2"><button onClick={() => handleSetUserData(_id)} className="bg-blue-200 py-1 px-4 rounded-md">Modify</button></td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}
