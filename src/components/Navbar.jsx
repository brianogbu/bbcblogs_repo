import Capturea from '../assets/Capturea.png'
import Captureb from '../assets/Captureb.png'
import Capturex from '../assets/Capturex.png'

export default function Navbar(auth) {
	return (
		<>
			<div id="navbar">
				<span className="pic1">
					<img src={Captureb} alt="" />
				</span>
				<span className="signin">
					<span>
						<img src={Capturea} className="pic2" alt="" />
					</span>
					<span className="signIn">Sign in</span>
				</span>
				<span id="home">
					<span className="nav">Home</span>
					<span className="nav">News</span>
					<span className="nav">Sport</span>
					<span className="nav">Business</span>
					<span className="nav">Innovation</span>
					<span className="nav">Culture</span>
					<span className="nav">Travel</span>
					<span className="dots">...</span>
				</span>
				<span className='search'>
					<span>
						<img src={Capturex} alt="" width={'24'} height={'20'} />
					</span>
					<span className='sBBC'>Search BBC </span>
				</span>
			</div>

			
			 <div id="blogs">
				<div>Blogs</div>
			</div>

		</>
	)
}
