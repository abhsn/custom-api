export default function Modal({ newUser, setNewUser }) {
	function handleSubmit(e) {
		e.preventDefault()
	}

	return (
		<>
			{
				newUser ? <div className="fixed inset-0 bg-[#00000080] flex justify-center items-center">
					<form className="bg-white flex flex-col w-4/12 p-8 rounded-lg gap-4 [&>input]:rounded-md">
						<input placeholder="Name" type="text" name="text" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input placeholder="Email" type="email" name="text" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input placeholder="Phone" type="tel" name="text" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input placeholder="Website" type="url" name="text" className="border-2 border-blue-500 focus:outline-none p-2" />
						<input onClick={handleSubmit} className="bg-blue-500 text-white py-2 cursor-pointer" type="submit" value="Submit" />
						<input onClick={() => setNewUser(false)} className="bg-red-500 text-white py-2 cursor-pointer" type="button" value="Cancel" />
					</form>
				</div>
					: <></>
			}
		</>
	)
}
