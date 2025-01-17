import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;



  const handleSubmit = async (e) => {
	  e.preventDefault();
	  const data = await dispatch(login(email, password));
	  if (data) {
		  setErrors(data);
		}
	};
	// const demoSubmit = (e) => {
	// 	// e.preventDefault();
	// 	setEmail("ronesmith@example.com");
	// 	setPassword("password");
	// 	return dispatch(login(email, password));
	// };

  return (
		<>
			<h1>Log In</h1>
		  {/* <button onClick={demoSubmit}>DemoBarber</button>
		  {console.log(demoSubmit)} */}
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

export default LoginFormPage;
