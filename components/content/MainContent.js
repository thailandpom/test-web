import ContentDescription from "./ContentDescription";
import ContentTitle from "./ContentTitle";


const MainContent = (props) =>{
  const {bg, textColor, number, title, description, textAlign = 'left', className = '', section} = props;

  return (
		<>
			<div className={`section-content d-none d-md-block ${number == '03' ? 'have-bg': ''} ${className}`} style={{backgroundColor : bg}}>
				<div className="container">
					<div className={`row ${textAlign == 'left' ? 'justify-content-start' : 'justify-content-end'}`}>
						<div className="col-xl-6 col-lg-8 col-md-8 col-12">
							<div className={section == 1 ? '': 'padding-start'}> 
								<ContentTitle number={number} title={title} />
								<ContentDescription textColor={textColor} description={description} />
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</>
  )

}

export default MainContent