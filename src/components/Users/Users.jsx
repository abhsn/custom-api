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
			{
				users.map((user, idx) => {
					const { name, age, verified, email, phone, website } = user
					return (
						<tbody className="[&>tr>td]:text-center">
							<tr>
								<td>{idx+1}</td>
								<td>{name}</td>
								<td>{age}</td>
								<td>{verified.toString()}</td>
								<td>{email}</td>
								<td>{phone}</td>
								<td>{website}</td>
							</tr>
						</tbody>
					)
				})
			}
		</table>
	)
}
