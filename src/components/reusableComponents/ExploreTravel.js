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
import Hong from '../../assets/images/hong_kong.jpg';
import goa1 from '../../assets/images/goa1.jpg';
import TitleText from './TitleText';
import BodyText from './BodyText';
const ExploreTravel = () => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Box mt={'30px'}>
						<TitleText four>Explore Travel Destination Guide</TitleText>
					</Box>
					<Grid container style={{ marginTop: 40 }}>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									overflow: 'hidden',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
								}}></Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									overflow: 'hidden',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
								}}></Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									overflow: 'hidden',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
								}}></Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									overflow: 'hidden',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
								}}></Box>
						</Grid>
					</Grid>
					<Grid container style={{ marginTop: 20 }}>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
									overflow: 'hidden',
								}}></Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									overflow: 'hidden',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
								}}></Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									overflow: 'hidden',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
								}}></Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								className='shadow'
								style={{
									backgroundImage: `url(${Hong})`,
									height: 128,
									width: 128,
									borderRadius: 18,
									overflow: 'hidden',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto',
									backgroundSize: 'contain',
								}}></Box>
						</Grid>
					</Grid>
					<Box mt={'30px'}>
						<BodyText two>
							Not sure where to go on your next holiday ? Our comprehensive
							Destination Guides will give you vital insights so that you can
							make an informed choice. So go head and click through to explore
							our holiday .
						</BodyText>
					</Box>
					<Grid container spacing={2} style={{ marginTop: 15 }}>
						<Grid item xs={6}>
							<TitleText>Popular Hotel Destinations</TitleText>
							<Box mt={'20px'}>
								<BodyText>Goa Hotels</BodyText>
								{[0, 1, 2, 3, 4, 5].map((item) => {
									return (
										<>
											<BodyText textStyle={{ marginTop: 10 }}>
												Goa Hotels
											</BodyText>
										</>
									);
								})}
							</Box>
						</Grid>
						<Grid item xs={6}>
							<TitleText>Bus Booking Routes</TitleText>
							<Box mt={'20px'}>
								<BodyText>Delhi to Jaipur Bus</BodyText>
								{[0, 1, 2, 3, 4, 5].map((item) => {
									return (
										<>
											<BodyText textStyle={{ marginTop: 10 }}>
												Delhi to Jaipur Bus
											</BodyText>
										</>
									);
								})}
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Box mt={'30px'}>
						<TitleText four> Holiday Deal Packages</TitleText>
					</Box>

					{/* <Grid item xs={5}> */}

					{/* </Grid> */}
					{/* <Grid item xs={7}> */}

					{/* </Grid> */}
					{[0, 1, 2, 3, 4].map((item) => {
						return (
							<>
								<Grid container style={{ marginTop: 30 }}>
									<Box
										display='flex'
										justifyContent='space-between'
										className='shadow'
										style={{ padding: 5, borderRadius: 15 }}>
										<img
											src={goa1}
											width='230px'
											height='116px'
											style={{ borderRadius: 5 }}></img>
										<BodyText textStyle={{ marginLeft: 10 }}>
											Amazing Goa Tour with The Ocean <br></br>Park Resort
										</BodyText>
									</Box>
								</Grid>
							</>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
};

export default ExploreTravel;
