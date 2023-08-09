import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import aaron from "../Images/remove.png";
import shop from "../Images/shopimg.jpeg";
import background from "../Images/blkBackGround.jpeg";
import "./BarberProfile.css";
import Appointments from "../Appointments";
import Services from "../Services";
import CashRegister from "../Register";
import Locations from "../Locations"
import stateofmind from "../Images/stateofmind.jpg";
import video from "../Images/video.mov";


const BarberProfile = () => {
	const client = useSelector((state) => state.session.user);
	const barber = useSelector((state) => state.session.user);

	const [isLoaded, setIsLoaded] = useState(true);

	function openPage(pageName, elmnt, color) {
		let i, tabcontent, tablinks;

		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByClassName("tablink");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].style.backgroundColor = "";
		}

		document.getElementById(pageName).style.display = "block";
		elmnt.style.backgroundColor = color;
	}

	useEffect(() => {
		document.getElementById("defaultOpen").click();
	}, []);

	if (!barber) {
		return <Redirect to="/" />;
	}

	return (
		<div className="pageContainer">
			<div className="row">
				<div className="leftColumn">
					<video
						id="video"
						src={video}
						className="video"
						muted="true"
						autoplay="true"
						loop="true"
					/>
					o
					<img alt="lo" className="stateofmind" src={stateofmind} />
					<img alt="concordShop" className="shop" src={shop} />
					{/* <img alt="barberPicture" className="stateofmind" src={aaron} /> */}
				</div>
				<div className="rightColumn">
					<button
						className="tablink"
						onClick={(e) => openPage("Appointments", e.target, "#30cd30")}
						id="defaultOpen"
					>
						Appointments
					</button>
					<button
						className="tablink"
						onClick={(e) => openPage("Services", e.target, "#32cd32")}
					>
						Services
					</button>
					<button
						className="tablink"
						onClick={(e) => openPage("Register", e.target, "#32cd32")}
					>
						Register
					</button>
					<button className="tablink" onClick={(e) => openPage("Locations", e.target)}>
						Locations
					</button>

					<div id="Appointments" className="tabcontent">
						{Appointments()}
					</div>

					<div id="Services" className="tabcontent">
						{Services()}
					</div>

					<div id="Register" className="tabcontent">
						{CashRegister()}
					</div>

					<div id="Locations" className="tabcontent">
						{Locations()}
					</div>

					<div id="Locations" className="tabcontent">
						<h3>Locations</h3>
						<p>Who we are and what we do.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BarberProfile;

// import React, {useState, useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {NavLink} from "react-router-dom";
// import logo from "../Images/remove.png";
// import ProfileButton from "../Navigation/ProfileButton";
// import "./BarberProfile.css";
// import BarberIndex from "../BarberIndex";
// import {Redirect} from "react-router-dom";
// import aaron from "../Images/aaron.jpeg";
// import video from "../Images/video.mov";

// const BarberProfile = () => {
// 	// const dispatch = useDispatch();
// 	// const appointmentReducer = useSelector((state) => state.appointmentReducer);
// 	// const appointments = Object.values(appointmentReducer);
// 	const client = useSelector((state) => state.session.user);
// 	const barber = useSelector((state) => state.session.user);

// 	function openPage(pageName, elmnt, color) {
//   // Hide all elements with class="tabcontent" by default */
//   	let i, tabcontent, tablinks;
//   	tabcontent = document.getElementsByClassName("tabcontent");
//   	for (i = 0; i < tabcontent.length; i++) {
//    tabcontent[i].style.display = "none";
//   	}

//   // Remove the background color of all tablinks/buttons
//    tablinks = document.getElementsByClassName("tablink");
//    for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//    }

//   // Show the specific tab content
//    document.getElementById(pageName).style.display = "block";

//   // Add the specific color to the button used to open the tab content
//    elmnt.style.backgroundColor = color;
// }

// // Get the element with id="defaultOpen" and click on it
// 	document.getElementById("defaultOpen").onClick();
// 	// const barberId = barber.id;

// 	const [isLoaded, setIsLoaded] = useState(true);

// 	if (!barber) {
// 		return <Redirect to="/" />;
// 	}

// 	// console.log("<-------check------->", barberId);

// 	// useEffect(() => {
// 	// 	dispatch(fetchAppointments());
// 	// }, [dispatch]);

// 	// const userTransactions = Object.values(allTransactions).filter(
// 	//     (transaction) => transaction.user_id === userId
// 	// );

// 	return (
// 		<div className="pageContainer">
// 				<img alt="barberPicture" className="stateofmind" src={aaron} />
// 			<div className="row">
// 				<button class="tablink" onClick={openPage('Home', this, 'red')}>
// 					Appointments
// 				</button>
// 				<button class="tablink" onclick="openPage('Services', this, 'green')" id="defaultOpen">
// 					Services
// 				</button>
// 				<button class="tablink" onclick="openPage('Register', this, 'blue')">
// 					Register
// 				</button>
// 				<button class="tablink" onclick="openPage('Locations', this, 'orange')">
// 					Locations
// 				</button>

// 				<div id="Appointments" class="tabcontent">
// 					<h3>Home</h3>
// 					<p>Home is where the heart is..</p>
// 				</div>

// 				<div id="Services" class="tabcontent">
// 					<h3>Services</h3>
// 					<p>Some news this fine day!</p>
// 				</div>

// 				<div id="Register" class="tabcontent">
// 					<h3>Register</h3>
// 					<p>Get in touch, or swing by for a cup of coffee.</p>
// 				</div>

// 				<div id="Locations" class="tabcontent">
// 					<h3>Locations</h3>
// 					<p>Who we are and what we do.</p>
// 				</div>

// 				{/* <div className="column">
// 					<img alt="barberPicture" className="stateofmind" src={aaron} />
// 					<button className="barberComponents">
// 						<h1>Appointments</h1>
// 					</button>
// 				</div>
// 				<div className="column">
// 					<h1>test</h1>
// 					<NavLink to={"/appointments"}></NavLink> */}
// 			</div>

// 			{/* <video src={video} width="600" height="300" muted="true" autoplay="true" loop="true" /> */}
// 			{/* <div className="barberName">
// 					{barber.first_name} {barber.last_name}
// 				</div>
// 				<div>
// 					<NavLink to={"/appointments"}>
// 						<button className="barberComponents">
// 							<h1>Appointments</h1>
// 						</button>
// 					</NavLink>
// 				</div>
// 				<div>
// 					<NavLink to={"/services"}>
// 						<button className="barberComponents">
// 							<h1>services</h1>
// 						</button>
// 					</NavLink>
// 				</div>
// 				<div>
// 					<NavLink to={"/register"}>
// 						<button className="barberComponents">
// 							<h1>register</h1>
// 						</button>
// 					</NavLink>
// 				</div>
// 			</div>
// 			<div className="barberProfile">
// 				{isLoaded && (
// 					<>
// 						<img alt="logo" className="barberimg" src={logo} />
// 					</>
// 				)} */}
// 		</div>
// 	);
// };

// export default BarberProfile;
