import { TEXT_ONE, TEXT_TWO } from "../../constant/text_data";
import MainContent from "../content/MainContent";
import SectionTitle from "./SectionTitle";
import Slide from "./Slide";

const SectionTwo = (props) =>{
	const {className, bg, text, textAlign = 'left'} = props;

	return (
		<>
			<div className="position-relative overflow-x-hidden">
				
				<SectionTitle 
					bg={'#FFFFFF'}
					textAlign={'left'}
					text={'PLAYERS'} 
					className={'section-two'} 
					section={2}
				/>
				<img src="/images/img-section-two.svg" className="img-centerion-two" />
				{
					TEXT_TWO?.map((val, index) => (
						<MainContent
							key={index}
							bg={val.bg}
							textColor={val.textColor}
							textAlign={val.textAlign}
							number={val.number}
							title={val.title}
							description={val.description}
							section={2}
							className={val.className}
						/>
					))
				}

				<Slide data={TEXT_TWO} />
			</div>
		</>
	)
}
  
export default SectionTwo