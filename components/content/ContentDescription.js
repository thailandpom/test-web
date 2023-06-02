
const ContentDescription = (props) =>{
	const {textColor, description} = props;

	return (
		<>
			<div style={{color : textColor}}>
				<p>{description}</p>
			</div>
		</>
	)
}
  
export default ContentDescription