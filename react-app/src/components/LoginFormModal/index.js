import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./LoginForm.css";

function LoginFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const {closeModal} = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		} else {
			closeModal();
		}
	};

	const demoSubmit = (e) => {
		setEmail("ronesmith@example.com");
		setPassword("password");
		dispatch(sessionActions.login(email, password)).then(closeModal())
	};

	return (
		<>
			<h1>Log In</h1>
			<button onClick={demoSubmit}>DemoBarber</button>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Log In</button>
			</form>
		</>
	);
}

export default LoginFormModal;
