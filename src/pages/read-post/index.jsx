import { useParams } from 'react-router-dom'
import { allPost } from '../../data'
import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Captureb from '../../assets/Captureb.png'
import Captureb2 from '../../assets/Captureb2.png'
import Capturea from '../../assets/Capturea.png'
import Capturea2 from '../../assets/Capturea2.jfif'
import Capturex from '../../assets/Capturex.png'
import Capturex2 from '../../assets/Capturex2.png'
import Image1 from '../../assets/Image_1.jpg'

function ReadPost() {
	const { id } = useParams()
	const [post, setPost] = React.useState(null)

	const getPostById = (postId) => {
		return allPost.find((post) => post.id === Number(postId))
	}
	React.useEffect(() => {
		if (id) {
			const currectPost = getPostById(id)
			console.log({ id, currectPost })
			setPost(currectPost)
		}
	}, [id])

	if (!post) {
		return <>no post found</>
	}
	return (
		<>
			<div style={post.bgimage}>
				<div id="navbar" style={post.color}>
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
					<span className="search">
						<span>
							<img src={Capturex} alt="" width={'24'} height={'20'} />
						</span>
						<span className="sBBC">Search BBC </span>
					</span>
				</div>
				<div className="to">
					<div className="top">{post.text1}</div>
					<div className="text9">
						<div className="text10">
							<div style={{ fontWeight: '700', fontSize: '26px' }}>
								Featured Post
							</div>
							<div
								className="blue"
								style={{
									fontSize: '32px',
									fontWeight: '700',
									lineHeight: '36px',
								}}
							>
								{post.text1}
							</div>
							<div style={{ fontSize: '14px' }}>
								Wednesday 15 April 2020, 13:00
							</div>
							<div
								style={{
									fontSize: '12.5px',
									fontWeight: '800',
									paddingBottom: '8px',
								}}
							>
								<span className="blue">Mary Beard,</span> Presenter, Front Row
								Late
							</div>
							<div style={{ display: 'inline-flex' }}>
								<span>
									<img src={Image1} alt="" height={'100'} width={'268'} />
								</span>
								<span style={{ marginLeft: '15px' }}>
									<div style={{ fontSize: '15px' }}>
										Mary Beard tells us about the new series of Front Row Late,
										and the trials <br></br>and tribulations of filming at home.
									</div>
									<div
										className="blue"
										style={{
											fontSize: '14px',
											fontWeight: '700',
											wordSpacing: '0px',
										}}
									>
										Read more
									</div>
								</span>
							</div>
							<div
								className="blue"
								style={{
									fontSize: '16px',
									fontWeight: '700',
									marginTop: '5px',
								}}
							>
								COMMENTS
							</div>
						</div>
						<div className="text11">
							<div className="text11a">
								<div className="sub-head1">About This Blog</div>
								<div
									style={{
										paddingLeft: '18px',
										paddingTop: '15px',
										fontSize: '14px',
										lineHeight: '18px',
									}}
								>
									<div style={{ marginBottom: '25px', paddingRight: '10px' }}>
										{post.content}
									</div>
									<div>
										Follow{' '}
										<span style={{ wordSpacing: '0px' }} className="blue">
											About the BBC
										</span>{' '}
										on Twitter
									</div>
									<div
										className="blue"
										style={{
											wordSpacing: '0px',
											marginTop: '15px',
											paddingBottom: '15px',
										}}
									>
										Blog home
										<br></br>Explore all BBC blogs
									</div>
								</div>
							</div>
							<div className="text11a" style={{ marginTop: '15px' }}>
								<div className="sub-head1">Blog Updates</div>
								<div
									style={{
										paddingLeft: '18px',
										paddingTop: '15px',
										fontSize: '14px',
										lineHeight: '18px',
									}}
								>
									<div style={{ marginBottom: '10px', paddingRight: '10px' }}>
										Stay updated with the latest posts from the blog
									</div>
									<div
										style={{
											marginTop: '5px',
											fontWeight: '700',
											fontSize: '20px',
											marginBottom: '15px',
										}}
									>
										Subscribe to the blog using:
									</div>
									<div>
										<span
											style={{ wordSpacing: '0px', lineHeight: '25px' }}
											className="blue"
										>
											RSS feed <br />
											ATOM feed
										</span>{' '}
									</div>
									<div
										className="blue"
										style={{
											wordSpacing: '0px',
											marginTop: '5px',
											paddingBottom: '15px',
										}}
									>
										What are feeds?
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ReadPost
