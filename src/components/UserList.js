import React from "react";
import User from "./User";

const userList = ({ users }) => {
	return (
		<>
			<h1>User Information Table</h1>
			{/* <form></form> */}
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<User userData={user} key={user.name} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default userList;
