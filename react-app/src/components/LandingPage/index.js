import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import "./landingPage.css";
import cut1 from "../Images/cut1.jpg";
import cut2 from "../Images/cut2.jpg";
import cut4 from "../Images/cut4.jpg";
import whitechair from "../Images/whitechar.jpg";
import cut6 from "../Images/cut6.JPG";
import cut3 from "../Images/cut3.jpg";
import cut9 from "../Images/cut9.jpg";
import cut10 from "../Images/cut10.jpg";
import cut11 from "../Images/cut11.jpg";
import cut12 from "../Images/cut12.JPG";
import cut14 from "../Images/cut14.jpg";
import cut15 from "../Images/cut15.jpg";
import cut16 from "../Images/cut16.jpg";
import cut18 from "../Images/cut18.jpg";
import cut19 from "../Images/cut19.jpg";
import cut21 from "../Images/cut21.JPG";
import cut22 from "../Images/cut22.jpg";
import logo from "../Images/whiteIcon.jpeg";
import presChair from "../Images/presChair.jpeg";
import concordChairs from "../Images/chairImg.jpeg";
import bestofeast from "../Images/bestofeast.jpg";
import blackBackground from "../Images/wallpaper.jpg";
import stateofmind from "../Images/stateofmind.jpg";

import ProfileButton from "../Navigation/ProfileButton";

const LandingPage = () => {
	// const dispatch = useDispatch();
	// const appointmentReducer = useSelector((state) => state.appointmentReducer);
	// const appointments = Object.values(appointmentReducer);
	const client = useSelector((state) => state.session.user);
	const sessionUser = useSelector((state) => state.session.user);
	const [isLoaded, setIsLoaded] = useState(true);
	console.log("<-------check------->", client);

	// useEffect(() => {
	// 	dispatch(fetchAppointments());
	// }, [dispatch]);

	// const userTransactions = Object.values(allTransactions).filter(
	//     (transaction) => transaction.user_id === userId
	// );

	return (
		<div className="fullPage">
			<div className="imgContainer">
				<div class="scroll-container">
					<img alt="hottowel" width="475" height="400" src={cut16} />
					<img alt="bestoftheeast" className="logoimg" src={bestofeast} />
					<img alt="dariocut" width="390" height="400" src={cut19} />
					<img alt="cape" className="logoimg" src={cut9} />
					<img alt="cut2" className="logoimg" src={cut2} />
					<img alt="chris" width="550" height="400" src={cut11} />
					<img alt="jhaCut" className="logoimg" src={cut12} />
					<img alt="jhaCut3" width="475" height="400" src={cut21} />
					<img alt="jhaCut2" width="400" height="400" src={cut22} />
					<img alt="whitechair" className="logoimg" src={whitechair} />
					<img alt="tape" className="logoimg" src={cut1} />
					<img alt="cut4" className="logoimg" src={cut10} />
					<img alt="tape" className="logoimg" src={cut4} />
					<img alt="hassan" width="380" height="400" src={cut15} />
					<img alt="justin" width="410" height="400" src={cut14} />
					{/* <img alt="blonde" width="310" height="300" src={cut3} /> */}
					{/* <img alt="pin" className="logoimg" src={pin} /> */}
					{/* <img alt="ronecut" className="logoimg" src={cut20} /> */}
					{/* <img alt="cut4" className="logoimg" src={cut17} /> */}
					{/* <img alt="logoImg" width="400" height="300" src={logo} /> */}
					{/* <ProfileButton user={sessionUser} /> */}
				</div>
				<div className="stateofmindContainer">
					<img alt="logo" className="stateofmind" src={stateofmind} />
				</div>

				{/* </NavLink> */}
			</div>
		</div>
	);
};

export default LandingPage;
