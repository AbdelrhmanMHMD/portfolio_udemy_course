import { useState } from "react";
import "./topbar.scss";
const Topbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className={"topbar " + (menuOpen ? "active" : "")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						genius.
					</a>
					<div className="itemContainer">
						<i className="fa-solid fa-user"></i>
						<span>+201029230204</span>
					</div>
					<div className="itemContainer">
						<i className="fa-solid fa-envelope"></i>
						<span>am600680@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div
						className="hamburger"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
