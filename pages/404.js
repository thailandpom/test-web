import Link from "next/link";

const NotFound = (props) => {
	return (
		<div>
			<h1>Oops! You seem to be lost.</h1>
			<p>Here are some helpful links:</p>
			<Link href='/'>Home</Link>
		</div>
	) 
}

export default NotFound