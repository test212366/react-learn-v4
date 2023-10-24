import { useState } from "react"
import { Posts } from "./Posts"

export const Home = () => {
	let [currentValue, setCurrentValue] = useState(2)
	let [currentPosts, setCurrentPosts] = useState([
		{ id: 1, title: 'some1' },
		{ id: 2, title: 'some2' },
		{ id: 3, title: 'some3' },
	])
	let [valueI, setValueI] = useState('')
	const tempIf = true
	/// for more input's need use objects in useState
	// example: const [post, setPost] = useState({title: '', titleForInputSecond: ''})
	// <input value={post.title} onChange={e => setPost({...post, title: e.target.value})}

	// npm react-transition-group
	// npm i axios
	const incr = () => {
		setCurrentValue(currentValue += 1)
	}
	const decr = () => {
		setCurrentValue(currentValue -= 1)
	}
	const addNewPost = e => {
		e.preventDefault()
		if (valueI) {
			setCurrentPosts([{ id: Date.now(), title: valueI }, ...currentPosts])
			setValueI(valueI = '')
		}
	}
	//динамическая проверка есть ли чтото или нет 
	return (
		<div>
			{tempIf
				? <p>true</p>
				: <p>false</p>
			}
			<h1>{currentValue}</h1>
			<button className="fjdlskf" onClick={incr}>incr</button>
			<hr />
			<button className="fjdlskf2" onClick={decr}>decr</button>

			<form className="fjdlsk5" onSubmit={addNewPost}>
				<h1>posts</h1>
				<input type="text" value={valueI} onChange={e => setValueI(e.target.value)} />
				<button className="fjdlskf3" type="submit">send</button>
			</form>
			<Posts array={currentPosts} />
		</div>
	)
}