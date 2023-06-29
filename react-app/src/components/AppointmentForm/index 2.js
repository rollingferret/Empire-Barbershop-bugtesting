import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {createAppointment, fetchAppointments} from "../../store/appointment";
import { fetchServicekById, fetchServices } from "../../store/service";
import Clients from "../Clients";
import { fetchClients } from "../../store/client";

const AppointmentForm = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const user = useSelector(state => state.session.user)
	const appointmentReducer = useSelector((state) => state.appointmentReducer);
	const serviceReducer = useSelector((state) => state.serviceReducer);
	const appointments = Object.values(appointmentReducer);
	const clientReducer = useSelector((state) => state.clientReducer);
	const clients = Object.values(clientReducer);
	const services = Object.values(serviceReducer);

	// console.log("<-------AppointmentComponent------->", user.id);

	useEffect(() => {
		dispatch(createAppointment())
		dispatch(fetchServices());
		dispatch(fetchClients())
	}, [dispatch]);

	const [selectedService, setSelectedService] = useState();
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [repeat, setRepeat] = useState("None");
	const [client, setClient] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const appointment = {
			barber_id: user.id,
			service_id: Number(selectedService),
			client_id: Number(client),
			date,
			time,
			repeat,
		};
		const newAppointment = await dispatch(createAppointment(appointment));
	};

	return (
		<>
			<h1>Create Appointment</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Service Name:
						<select
							value={selectedService}
							onChange={(e) => setSelectedService(e.target.value)}
						>
							{services.map((service) => (
								<option key={service.id} value={service.id}>
									{service.service_name}
								</option>
							))}
						</select>
					</label>
				</div>

				<label>
					Client:
					<select
						value={client}
						onChange={(e) => setClient(e.target.value)}
					>
						{clients.map((client) => (
							<option key={client.id} value={client.id}>
								{client.first_name}
								{client.last_name}
							</option>
						))}
					</select>
				</label>

				<label>
					Date:
					<input
						type="date"
						id="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</label>

				<label>
					Time:
					<input
						type="time"
						id="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
						required
					/>
				</label>

				<label>
					Repeat:
					<select
						value={repeat}
						onChange={(e) => setRepeat(e.target.value)}
					>
						<option value="None">None</option>
						<option value="1 Week">1 Week</option>
						<option value="2 Week">2 Week</option>
						<option value="3 Week">3 week</option>
						<option value="1 Month">1 Month</option>
						<option value="2 Month">2 Month</option>
					</select>
				</label>

				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default AppointmentForm;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import {useDispatch, useSelector} from "react-redux";
// import {NavLink} from "react-router-dom";
// import {createAppointment, fetchAppointments} from "../../store/appointment";
// import {fetchServicekById, fetchServices} from "../../store/service";

// const AppointmentForm = () => {
// 	const dispatch = useDispatch();
// 	const {id} = useParams();
// 	const appointmentReducer = useSelector((state) => state.appointmentReducer);
// 	const serviceReducer = useSelector((state) => state.serviceReducer);
// 	const appointments = Object.values(appointmentReducer);
// 	const services = Object.values(serviceReducer);

// 	console.log("<-------AppointmentComponent------->", services);

// 	useEffect(() => {
// 		// dispatch(createAppointment());
// 		dispatch(fetchServicekById(id))
// 		// dispatch(fetchServices());
// 	}, [dispatch, id]);

// 	const [service, setService] = useState("");
// 	const [date, setDate] = useState("");
// 	const [time, setTime] = useState("");
// 	const [repeat, setRepeat] = useState("");

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const appointment = {
// 			service_id: service,
// 			date,
// 			time,
// 			repeat,
// 		};
// 		const newAppointment = await dispatch(createAppointment(appointment));
// 	};
// 	// const userTransactions = Object.values(allTransactions).filter(
// 	//     (transaction) => transaction.user_id === userId
// 	// );

// 	return (
// 		<>
// 			<h1>Create Appointment</h1>
// 			<form onSubmit={handleSubmit}>
// 				<div>
// 					{services.map((services) => (
// 						<div key={services.id}>
// 							<select>
// 								Service Name:
// 								<option value={services.service_name}>
// 									{services.service_name}
// 								</option>
// 								{/* <option value="2 Weeks">2 Weeks</option>
// 								<option value="3 weeks">3 weeks</option>
// 								<option value="1 Month">1 Month</option>
// 								<option value="2 Month">2 Month</option> */}
// 								{/* <input
// 									type="text"
// 									id="service"
// 									value={service}
// 									onChange={(e) => setService(e.target.value)}
// 									required
// 								/> */}
// 							</select>
// 						</div>
// 					))}
// 				</div>

// 				<label>
// 					Date:
// 					<input
// 						type="text"
// 						id="date"
// 						value={date}
// 						onChange={(e) => setDate(e.target.value)}
// 					/>
// 				</label>

// 				<label>
// 					Time:
// 					<input
// 						type="text"
// 						id="time"
// 						value={time}
// 						onChange={(e) => setTime(e.target.value)}
// 						required
// 					/>
// 				</label>

// 				<label>
// 					Repeat:
// 					<select
// 						value={repeat}
// 						onChange={(e) => setRepeat(e.target.value)}
// 						required
// 					>
// 						<option value="1 Week">1 Week</option>
// 						<option value="2 Week">2 Week</option>
// 						<option value="3 Week">3 week</option>
// 						<option value="1 Month">1 Month</option>
// 						<option value="2 Month">2 Month</option>
// 					</select>
// 				</label>
// 				{/* <input
// 				type="text"
// 				id="repeat"
// 				value={repeat}
// 				onChange={(e) => setTimeFrame(e.target.value)}
// 				required
// 			/> */}

// 				<button type="submit">Submit</button>
// 			</form>
// 		</>
// 	);
// };

// export default AppointmentForm;
