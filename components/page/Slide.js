import ContentTitle from '../content/ContentTitle';
import ContentDescription from '../content/ContentDescription';


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const Slide = (props) =>{
	const {data} = props;

	return (
		<>
			<div className="show-slide d-block d-md-none" style={{backgroundColor : '#F5F4F9'}}>
				<div className="container">
					<div className={`row`}>
						<div className='col-12'>
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								// navigation
								pagination={{ clickable: true }}
								// scrollbar={{ draggable: true }}
								onSwiper={(swiper) => console.log(swiper)}
								onSlideChange={() => console.log('slide change')}
							>
								{
									data?.map((val, index) => (
										<SwiperSlide key={index}>
											<div className='show-monile-content'> 
												<ContentTitle number={val.number} title={val.title} />
												<ContentDescription textColor={'#000000'} description={val.description} />
											</div>
										</SwiperSlide>
									))
								}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
  
export default Slide