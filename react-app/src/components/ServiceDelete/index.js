import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {fetchServices} from "../../store/service";

const DeleteService = () => {
	const dispatch = useDispatch();
	// const {id} = useParams();
	const serviceReducer = useSelector((state) => state.serviceReducer);
	// const service = Object.values(serviceReducer);

	// console.log("<-------Services------->", serviceReducer);

	useEffect(() => {
		dispatch(fetchServices());
	}, [dispatch]);

	// const userTransactions = Object.values(allTransactions).filter(
	//     (transaction) => transaction.user_id === userId
	// );

	return (
		<>
			Delete Service
			{/* <h1>{service.first_name}</h1>
			<div>
				{service.map((service) => (
					<div key={service.id}>
						{service.service_name}
						<br />
						{service.price}
						<br />
						{service.description}
						<br />
						{service.time_frame}
					</div>
				))}
			</div> */}
		</>
	);
};

export default DeleteService;