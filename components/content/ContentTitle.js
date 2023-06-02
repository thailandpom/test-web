
const ContentTitle = (props) =>{
	const {number, title} = props;

	return (
		<>
			<div className="content-title">
				<span className="text-number">{number}</span><span className="text-title">{title}</span>
			</div>
		</>
	)
}
  
export default ContentTitle