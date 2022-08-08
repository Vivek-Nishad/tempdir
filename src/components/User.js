import React from "react";

const User = ({ userData }) => {
	return (
		<tr className="user">
			<td>{userData.name}</td>
			<td>{userData.phone} </td>
			<td>
				<button>edit</button>
				<button>delete</button>
			</td>
		</tr>
	);
};

export default User;
