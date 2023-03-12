export default function Users({ users }) {
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
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}
