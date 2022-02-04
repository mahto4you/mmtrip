import React, { useState } from 'react';
import Slider from 'react-slick';
import Gujarat from '../../assets/images/gujarat.jpg';
import LeftArrow from '../../assets/images/left-arrow.svg';
import RightArrow from '../../assets/images/right-arrow.svg';
import TitleText from './TitleText';
import { Box } from '@material-ui/core';
import BodyText from './BodyText';
export default function SlideCard({ title, data, value }) {
	const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
		<img src={LeftArrow} alt='prevArrow' {...props} />
	);

	const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
		<img src={RightArrow} alt='nextArrow' {...props} />
	);
	const [card, setCard] = useState(false);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: value === 'Flight' ? 5 : value === 'Package' ? 4 : 3,
		autoplay: true,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
	};
	console.log(card);
	return (
		<div className='card__container'>
			{value === 'Flight' ? (
				<h1>{title}</h1>
			) : value === 'Package' ? (
				<h1 style={{ color: 'white' }}>Holiday Packages</h1>
			) : (
				''
			)}

			<Slider {...settings} className='card__container--inner'>
				{data.map((item, index) => {
					return (
						<div
							onMouseEnter={() => setCard(true)}
							onMouseLeave={() => setCard(false)}
							className={
								value === 'Flight'
									? 'card__container--inner--card2'
									: value == 'Package'
									? 'card__container--inner--card3'
									: 'card__container--inner--card'
							}
							key={index}>
							<img
								src={value === 'Package' ? Gujarat : item.url}
								alt='hero_img'
							/>

							{value === 'Flight' ? (
								<>
									<Box style={{ background: 'white' }} className='shadow'>
										<TitleText two textStyle={{ color: 'black' }}>
											Delhi to Mumbai
										</TitleText>
										<TitleText two textStyle={{ color: 'black' }}>
											Flights
										</TitleText>
									</Box>
								</>
							) : value === 'Package' ? (
								<div
									style={{
										position: 'absolute',
										bottom: '6%',
										marginLeft: '35px',
									}}>
									<TitleText four textStyle={{ color: 'White' }}>
										Delhi Packages
									</TitleText>
									{card ? (
										<Box
											style={{
												backgroundColor: 'rgb(57, 201, 187)',
												borderRadius: 15,
												padding: 5,
											}}>
											<TitleText two textStyle={{ color: 'White' }}>
												Book Now
											</TitleText>
										</Box>
									) : (
										''
									)}
								</div>
							) : (
								''
							)}
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
