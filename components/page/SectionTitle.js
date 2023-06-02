
const SectionTitle = (props) =>{
	const {className, bg, text, textAlign = 'left', section} = props;

	return (
		<>
			<div className={className} style={{backgroundColor : bg}}>
				<div className="container">
					<div className={`row ${textAlign == 'left' ? 'justify-content-start' : 'justify-content-end'}`}>
						<div className="col-xl-6 col-lg-8 col-md-8 col-12">
							<div className={section == 1 ? '': 'padding-start'}> 
								<span className="text-title-section">{text}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
  
export default SectionTitle