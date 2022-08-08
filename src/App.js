import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import { useEffect, useId, useState } from "react";

function App() {
	let usersJson = [
		{ id: useId(), name: "vivek1", phone: 9876543212 },
		{ id: useId(), name: "vivek2", phone: 9876543212 },
		{ id: useId(), name: "vivek3", phone: 9876543212 },
		{ id: useId(), name: "vivek4", phone: 9876543212 },
		{ id: useId(), name: "vivek5", phone: 9876543212 },
	];
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(usersJson);
	}, []);
	// console.log(usersJson);

	useEffect(() => {}, [users]);

	// const addUser = (userInfo) => {
	// 	let {name,phone} = userInfo

	// };

	// const editUser = (id) => {
	// 	let tempUsers = [...users];
	// 	tempUsers.filter((ele) => ele.id !== id);
	// 	setUsers(tempUsers);
	// };

	const deleteUser = (id) => {
		let tempUsers = [...users];
		let newUsrArr = tempUsers.filter((ele) => ele.id !== id);
		setUsers(newUsrArr);
		console.log("fu", newUsrArr);
	};
	deleteUser(":r6:");

	return (
		<div className="App">
			<div className="listContainer">
				<UserList users={users} />
			</div>
		</div>
	);
}

export default App;
