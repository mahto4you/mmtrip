import React from 'react';
import {
	Box,
	Container,
	Grid,
	Drawer,
	makeStyles,
	Divider,
	Avatar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Chip,
} from '@material-ui/core';
import BodyText from './BodyText';
import TitleText from '../reusableComponents/TitleText';
const ProductOffer = () => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TitleText two>Product Offering</TitleText>
							<Box mt={'20px'}>
								{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
									return (
										<>
											<BodyText textStyle={{ marginTop: 10 }}>
												Flight Booking
											</BodyText>
										</>
									);
								})}
							</Box>
						</Grid>
						<Grid item xs={6}>
							<TitleText two>Holiday Packages</TitleText>
							<Box mt={'20px'}>
								{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
									return (
										<>
											<BodyText textStyle={{ marginTop: 10 }}>
												Flight Booking
											</BodyText>
										</>
									);
								})}
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TitleText two>Hotels</TitleText>
							<Box mt={'20px'}>
								{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
									return (
										<>
											<BodyText textStyle={{ marginTop: 10 }}>
												Flight Booking
											</BodyText>
										</>
									);
								})}
							</Box>
						</Grid>
						<Grid item xs={6}>
							<TitleText two>Flight Routes</TitleText>
							<Box mt={'20px'}>
								{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
									return (
										<>
											<BodyText textStyle={{ marginTop: 10 }}>
												Flight Booking
											</BodyText>
										</>
									);
								})}
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default ProductOffer;
