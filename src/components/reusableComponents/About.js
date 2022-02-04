import React from 'react';
import TitleText from './TitleText';
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
import tata from '../../assets/images/tata.png';
import payment from '../../assets/images/payment.png';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BodyText from './BodyText';
const About = () => {
	return (
		<>
			<Box mt={'30px'}>
				<TitleText two>About DPauls.com</TitleText>
				<BodyText two textStyle={{ marginTop: 20 }}>
					Ever wished that there were an escape button on the keyboard of life?
					Well, since there isn’t, we are there for you. The universal truth is
					that every person in this universe needs a break at some point - A
					break from the mundane routines Read More
				</BodyText>
			</Box>
			<Divider style={{ marginTop: 20 }} />
			<Grid container>
				<Grid item xs={3}>
					<Box
						display='flex'
						mt={'30px'}
						p={'5px'}
						justifyContent='space-around'
						alignItems='center'>
						<LocationOnIcon />
						<TitleText two textStyle={{ marginLeft: 20 }}>
							B-40, Shivalik, Malviya Nagar New Delhi-110017
						</TitleText>
						<div style={{ borderLeft: '1px solid grey', height: '60px' }}></div>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box
						display='flex'
						justifyContent='space-around'
						alignItems='center'
						p={'5px'}
						mt={'30px'}>
						<LocalPhoneIcon />
						<TitleText two>
							011 66211111<br></br> 011 66777111
						</TitleText>
						<div style={{ borderLeft: '1px solid grey', height: '60px' }}></div>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box
						display='flex'
						mt={'30px'}
						p={'5px'}
						mb={'30px'}
						justifyContent='space-around'
						alignItems='center'>
						<LocalPostOfficeIcon />
						<TitleText two>contactus@dpauls.com</TitleText>
						<div style={{ borderLeft: '1px solid grey', height: '60px' }}></div>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box display='flex' mt={'30px'} p={'5px'} alignItems='center'>
						<Box>
							<YouTubeIcon />
						</Box>
						<Box>
							<YouTubeIcon />
						</Box>
						<Box>
							<YouTubeIcon />
						</Box>
						<Box>
							<YouTubeIcon />
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Divider style={{ marginBottom: 30 }} />
			<Grid container>
				<Grid item xs={3}>
					<Box
						display='flex'
						justifyContent='space-around'
						alignItems='center'
						p={'5px'}>
						<Box>
							<Box
								display='flex'
								p={'5px'}
								style={{ border: '1px solid #25d366' }}
								justifyContent='space-around'
								alignItems='center'>
								<WhatsAppIcon />
								<TitleText two textStyle={{ marginLeft: 20 }}>
									Connect with on WhatApp
								</TitleText>
								{/* <div style={{ borderLeft: '1px solid grey', height: '60px' }}></div> */}
							</Box>
							<Box
								display='flex'
								p={'5px'}
								mt={'10px'}
								style={{ border: '1px solid #25d366' }}
								justifyContent='space-around'
								alignItems='center'>
								<WhatsAppIcon />
								<TitleText two textStyle={{ marginLeft: 20 }}>
									Connect with on WhatApp
								</TitleText>
								{/* <div style={{ borderLeft: '1px solid grey', height: '60px' }}></div> */}
							</Box>
							<Box
								display='flex'
								p={'5px'}
								mt={'10px'}
								style={{ border: '1px solid #25d366' }}
								justifyContent='space-around'
								alignItems='center'>
								<WhatsAppIcon />
								<TitleText two textStyle={{ marginLeft: 20 }}>
									Connect with on WhatApp
								</TitleText>
								{/* <div style={{ borderLeft: '1px solid grey', height: '60px' }}></div> */}
							</Box>
						</Box>
						<Box></Box>
						<Box></Box>
						<div
							style={{ borderLeft: '1px solid grey', height: '160px' }}></div>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box display='flex' justifyContent='space-around' alignItems='center'>
						<Box alignItems='center' p={'5px'}>
							{[0, 1, 2, 3, 4].map((i) => {
								return (
									<>
										<TitleText two>About Us</TitleText>
									</>
								);
							})}
						</Box>
						<Box></Box>
						<div
							style={{ borderLeft: '1px solid grey', height: '160px' }}></div>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box display='flex' justifyContent='space-around' alignItems='center'>
						<Box alignItems='center' p={'5px'}>
							{[0, 1, 2, 3, 4].map((i) => {
								return (
									<>
										<TitleText two>Enquiry</TitleText>
									</>
								);
							})}
						</Box>
						<Box></Box>
						<Box></Box>
						<Box></Box>
						<div
							style={{ borderLeft: '1px solid grey', height: '160px' }}></div>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box display='flex' justifyContent='space-around' alignItems='center'>
						<Box alignItems='center' p={'8px'}>
							{[0, 1, 2, 3, 4].map((i) => {
								return (
									<>
										<TitleText two>Make Payment</TitleText>
									</>
								);
							})}
						</Box>
						<Box></Box>
						<Box></Box>
						<Box></Box>
						<Box></Box>
						{/* <div
							style={{ borderLeft: '1px solid grey', height: '160px' }}></div> */}
					</Box>
				</Grid>
			</Grid>
			<Grid container style={{ marginTop: 50 }} spacing={2}>
				<Grid item xs={8}>
					<Box
						style={{
							backgroundImage: `url(${tata})`,
							width: '100%',
							height: '80px',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'auto',
							backgroundSize: 'contain',
						}}></Box>
				</Grid>
				<Grid item xs={4}>
					<Box display='flex'>
						<Box>
							<BodyText>Payment Options: We Accept here</BodyText>
						</Box>
						<img src={payment}></img>
					</Box>
				</Grid>
			</Grid>
			<Box display='flex'>
				<TitleText>Note:</TitleText>
				<BodyText textStyle={{ marginLeft: 5 }} two>
					All claims, disputes and litigation relating to online booking through
					this website anywhere from India or abroad shall be subject to
					jurisdiction of Courts of Delhi only. All Images shown here are for
					representation purpose only.
				</BodyText>
			</Box>
		</>
	);
};

export default About;
