import Navbar from '../components/navbar'

import Footer from '../components/footer'
import { allPost } from '../data'
import Topic from '../components/Topic'
import Post from '../components/post'

export default function HomePage() {
	return (
		<>
			<Navbar showAuth={'Sign in'} />
			<div className="body-con">
				<div className="body">
					<Topic title="A">
						{allPost.map((post) => {
							return (
								<Post
									key={post.id}
									id={post.id}
									image={post.image}
									text={post.content}
									link={post.link}
									color={post.color}
									text1={post.text1}
									bgimage={post.bgimage}
									image1={post.image1}
								/>
							)
						})}
					</Topic>
				</div>
			</div>
			<Footer />
		</>
	)
}
