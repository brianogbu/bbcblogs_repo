import { createBrowserRouter } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReadPost from './pages/read-post'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/read/:id',
		element: <ReadPost />,
	},
])

export { router }
