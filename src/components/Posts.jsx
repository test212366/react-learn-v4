import { Post } from "./Post"

export const Posts = ({ array }) => {
	return (
		<div className="posts">
			{array.map(post => (<Post title={post.title} key={post.id} />))}

		</div>
	)
}