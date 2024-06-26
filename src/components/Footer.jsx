import { useState } from 'react'

export default function Footer() {
	return (
		<div className="footer">
			<div className="etb">Explore the BBC</div>
			<div className="Footerdiv">
				<div className="footerdiv">
					<div className="text3">Home</div>
					<div className="text3">Travel</div>
				</div>
				<div className="footerdiv">
					<div className="text3">News</div>
					<div className="text3">Earth</div>
				</div>
				<div className="footerdiv">
					<div className="text3">Sport</div>
					<div className="text3">Video</div>
				</div>
				<div className="footerdiv">
					<div className="text3">Business</div>
					<div className="text3">Live</div>
				</div>
				<div className="footerdiv">
					<div className="text3">Innovation</div>
				</div>
				<div className="footerdiv">
					<div className="text3">Culture</div>
				</div>
			</div>
			<hr></hr>
			<div className="text4">
				<span className="text41">Terms of use</span>
				<span className="text41">About BBC</span>
				<span className="text41">Privacy Policy</span>
				<span className="text41">Cookies</span>
				<span className="text41">Accessibility help</span>
				<span className="text41">Parental Guidance</span>
				<span className="text41">Contact the BBC</span>
				<span className="text41">BBC emails for you</span>
				<span className="text41">Advertise with us</span>
			</div>
			<div className="text5">
				Copyright © 2024 BBC. The BBC is not responsible for the content of
				external sites. Read about our approach to external linking.
			</div>
		</div>
	)
}
