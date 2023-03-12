export default function Modal({ newUser, setNewUser }) {
	function handleSubmit(e) {
		e.preventDefault()

		const form = e.target
		if (!form.name.value || !form.email.value || !form.phone.value || !form.website.value) return window.alert('Value can\'t be empty')

		const userInfo = {
			name: form.name.value,
			age: form.age.value,
			verified: form.verified.value === 'true' ? true : false,
			email: form.email.value,
			phone: form.phone.value,
			website: form.website.value
		}

		fetch('http://localhost:5000/new-user', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(userInfo)
		})
			.then(res => res.json())
			.then(data => data.success ? setNewUser(false) : undefined)
	}

	return (
		<>
			{
				newUser ? <div className="fixed inset-0 bg-[#00000080] flex justify-center items-center">
					<form onSubmit={handleSubmit} className="bg-white flex flex-col w-4/12 p-8 rounded-lg gap-4 [&>input]:rounded-md">
						<input placeholder="Name" type="text" name="name" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input placeholder="Age" type="number" name="age" className="border-2 border-blue-500 focus:outline-none p-2" />
						<div className="flex gap-4">
							<span>Verified</span>
							<div className="flex gap-2">
								<input placeholder="Age" type="radio" name="verified" value="true" id="verified-true" />
								<label htmlFor="verified-true">True</label>
							</div>
							<div className="flex gap-2">
								<input placeholder="Age" type="radio" name="verified" value="false" id="verified-false" />
								<label htmlFor="verified-fale">False</label>
							</div>
						</div>
						<input placeholder="Email" type="email" name="email" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input placeholder="Phone" type="tel" name="phone" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input placeholder="Website" type="url" name="website" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input className="bg-blue-500 text-white py-2 cursor-pointer" type="submit" value="Submit" />
						<input onClick={() => setNewUser(false)} className="bg-red-500 text-white py-2 cursor-pointer" type="button" value="Cancel" />
					</form>
				</div>
					: <></>
			}
		</>
	)
}
