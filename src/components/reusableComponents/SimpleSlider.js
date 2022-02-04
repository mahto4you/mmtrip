import React from 'react';
import Card from './SlideCard';

// Import css files
// import 'slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const dataTop = [
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
	{
		url: 'https://cdn.dpauls.com/public/images/defaultpages/slider-banners/dubai-packages.jpg',
	},
];

const SimpleSlider = ({ value }) => {
	return (
		<>
			<Card title='Trending' data={dataTop} value={value} />
		</>
	);
};

export default SimpleSlider;
