import React, { useState } from 'react';
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
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchOne from '../../components/reusableComponents/SearchOne';
import home from '../../assets/images/home_hero_bg.jpg';
import logo from '../../assets/images/logo.png';
import flight from '../../assets/images/flight.png';
import holiday_packages from '../../assets/images/holiday_packages.png';
import things_to_do from '../../assets/images/things_to_do.png';
import travel_destination_guide from '../../assets/images/travel_destination_guide.png';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import TitleText from '../../components/reusableComponents/TitleText';
import BodyText from '../../components/reusableComponents/BodyText';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { toggleDrawerModal } from '../../reducers/UiReducer';
import { useDispatch, useSelector } from 'react-redux';
import SimpleSlider from '../../components/reusableComponents/SimpleSlider';
import ExploreTravel from '../../components/reusableComponents/ExploreTravel';
import ProductOffer from '../../components/reusableComponents/ProductOffer';
import About from '../../components/reusableComponents/About';
import Footer from '../../components/reusableComponents/Footer';
import SearchTwo from '../../components/reusableComponents/SearchTwo';
import Range from '../../components/reusableComponents/Range';
const drawerWidth = '20vw';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		width: '85vw',
		marginLeft: drawerWidth,
		backgroundColor: '#fff',
		[theme.breakpoints.down('md')]: {
			width: '80vw',
			marginLeft: '20vw',
		},
		'@media (max-width:820px)': {
			// eslint-disable-line no-useless-computed-key
			width: '75vw',
			marginLeft: '25vw',
		},
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		[theme.breakpoints.down('md')]: {
			width: '20vw',
		},
		'@media (max-width:820px)': {
			// eslint-disable-line no-useless-computed-key
			width: '25vw',
		},
	},
	drawerPaper: {
		width: drawerWidth,
		[theme.breakpoints.down('md')]: {
			width: '20vw',
		},
		'@media (max-width:820px)': {
			// eslint-disable-line no-useless-computed-key
			width: '25vw',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar, //
	drawerLogo: {
		minHeight: 110,
		display: 'flex',
		alignItems: 'center',
		'@media (max-width:820px)': {
			// eslint-disable-line no-useless-computed-key
			minHeight: 167,
		},
	},
	content: {
		flexGrow: 1,
		// backgroundColor: theme.palette.background.default,
		backgroundColor: '#F5F7FF',
		padding: theme.spacing(5),
		minHeight: '100vh',
		width: '83vw',
		[theme.breakpoints.down('md')]: {
			width: '78vw',
		},
		'@media (max-width:820px)': {
			// eslint-disable-line no-useless-computed-key
			width: '73vw',
		},
	},
	custom: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		color: theme.palette.text.primary,
	},
	drawerIcon: {
		minWidth: 40,
	},
	menuItem: {
		backgroundColor: '#fff',
	},
	selectedMenuItem: {
		backgroundColor: '#f2f5fe',
	},
	menuText: {
		color: '#000',
		fontWeight: 600,
	},
	selectedMenuText: {
		color: '#0035F0',
		fontWeight: 600,
	},
	logout: {
		position: 'absolute',
		bottom: 10,
	},
	filterSortWrapper: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 8,
		paddingBottom: 8,
		[theme.breakpoints.down('md')]: {
			paddingLeft: 10,
			paddingRight: 10,
		},
	},
	filterSortButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		backgroundColor: '#F0F3FF',
		padding: theme.spacing(1.25, 1.5),
		borderRadius: 25,
		'&:hover': { backgroundColor: '#F0F3FF' },
	},
	searchBar: {
		'&&&:before': {
			borderBottom: 'none',
		},
	},
	filterGrid: {
		'@media (max-width:1100px)': {
			// eslint-disable-line no-useless-computed-key
			maxWidth: 'none',
			flexBasis: 'auto',
		},
		paddingLeft: '5px',
		paddingRight: '5px',
		'@media (max-width:820px)': {
			padding: '4px 3px',
		},
	},
	headerBox: {
		padding: 10,
		[theme.breakpoints.up('md')]: {
			padding: '10px 40px',
		},
	},
}));

const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { drawer } = useSelector((state) => state.ui);
	const [data, setData] = useState(false);
	const [value, setValue] = useState('Economy');
	const [adult, setAdult] = useState(0);
	const [child, setChild] = useState(0);
	const [infant, setInfant] = useState(0);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<>
			<Box
				style={{
					paddingTop: '10px',
					background: 'linear-gradient(180deg,rgb(0 0 0/52%),rgb(0 0 0/0))',
					position: 'absolute',
					zIndex: 99,
					height: 60,
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				}}>
				<Container>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'>
						<Box display='flex'>
							<Avatar
								style={{
									backgroundColor: 'rgba(0,0,0,.3)',
									cursor: 'pointer',
								}}>
								<FormatAlignLeftIcon
									onClick={() => dispatch(toggleDrawerModal(true))}
								/>
							</Avatar>
							<Box style={{ marginLeft: 30 }}>
								<img src={logo} width='80%'></img>
							</Box>
						</Box>
						<Box display='flex' mr={'60px'}>
							<Chip
								variant='outlined'
								size='small'
								style={{
									color: 'white',
									backgroundColor: 'rgba(0,0,0,.4)',
									borderRadius: 25,
									padding: '3px 8px 4px',
									fontSize: 14,
								}}
								avatar={
									<Avatar>
										<PermIdentityIcon />
									</Avatar>
								}
								label='MyAccount'
								// onClick={handleClick}
							/>
							<Chip
								variant='outlined'
								size='small'
								style={{
									color: 'white',
									backgroundColor: 'rgba(0,0,0,.4)',
									borderRadius: 25,
									fontSize: 14,
									marginLeft: 20,
									padding: '3px 8px 4px',
								}}
								avatar={
									<Avatar>
										<LocalPhoneIcon />
									</Avatar>
								}
								label='CallUs'
								// onClick={handleClick}
							/>
						</Box>
					</Box>
					{/* <SimpleSlider /> */}
					<Box textAlign='center' style={{ color: 'white' }} mt={'100px'}>
						<TitleText four>
							Book Flights Tickets, Tour Packages, Hotels & Sightseeing
						</TitleText>
					</Box>

					<Grid container>
						<Grid item xs={1}>
							<Box
								style={{
									backgroundColor: '#39c9bb',
									color: 'white',
									padding: '8px 25px',
									textAlign: 'center',
								}}>
								<TitleText two>Flight</TitleText>
							</Box>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={5}>
							<Grid container>
								<Grid item xs={6}>
									<SearchOne />
								</Grid>
								<Grid item xs={6}>
									<SearchTwo />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={3}>
							<Range />
						</Grid>
						<Grid item xs={4}>
							<Grid container>
								<Grid item xs={7}>
									<Box
										style={{ padding: 18, backgroundColor: 'white' }}
										display='flex'
										justifyContent='space-around'
										alignItems='center'>
										<BodyText one>
											1 Traveller(s)<span>|</span>Economy
										</BodyText>
										<Box>
											<ExpandMoreIcon
												style={{
													transform: data ? 'rotate(180deg)' : '',
													transition: 'all .3s',
												}}
												onClick={() => {
													data ? setData(false) : setData(true);
												}}
											/>
										</Box>
									</Box>
									<div
										style={{
											// opacity: 1,
											transform: data ? 'scaleY(0.85)' : 'scaleY(0)',
											// position: 'absolute',
											// top: '100%',
											// left: 0,
											marginTop: '6px',
											minWidth: 300,
											padding: 10,
											background: 'white',
											position: 'absolute',
											boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)',
											// opacity: 0,
											// transform: 'scaleY(0)',
											transformOrigin: 'top',
											transition: 'all .3s ease',
										}}>
										<Box
											display='flex'
											justifyContent='space-between'
											textAlign='center'
											mt={'5px'}>
											<BodyText>Adult</BodyText>
											<Box display='flex'>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														border: 0,
														cursor: 'pointer',

														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}
													onClick={() =>
														adult === 0 ? '' : setAdult(adult - 1)
													}>
													<BodyText
														textStyle={{
															marginTop: 8,
															color: adult === 0 ? 'wheat' : '',
														}}>
														-
													</BodyText>
												</Box>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														border: 0,
														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}>
													<BodyText textStyle={{ marginTop: 8 }}>
														{adult}
													</BodyText>
												</Box>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														cursor: 'pointer',

														border: 0,
														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}
													onClick={() =>
														adult === 9 ? '' : setAdult(adult + 1)
													}>
													<BodyText
														textStyle={{
															marginTop: 8,
															color: adult === 9 ? 'wheat' : '',
														}}>
														+
													</BodyText>
												</Box>
											</Box>
										</Box>
										<Box
											display='flex'
											justifyContent='space-between'
											textAlign='center'
											mt={'5px'}>
											<BodyText>Child</BodyText>
											<Box display='flex'>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														border: 0,
														cursor: 'pointer',

														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}
													onClick={() =>
														child === 0 ? '' : setChild(child - 1)
													}>
													<BodyText
														textStyle={{
															marginTop: 8,
															color: child === 0 ? 'wheat' : '',
														}}>
														-
													</BodyText>
												</Box>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														border: 0,
														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}>
													<BodyText textStyle={{ marginTop: 8 }}>
														{child}
													</BodyText>
												</Box>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														cursor: 'pointer',

														border: 0,
														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}
													onClick={() =>
														child === 9 ? '' : setChild(child + 1)
													}>
													<BodyText
														textStyle={{
															marginTop: 8,
															color: child === 9 ? 'wheat' : '',
														}}>
														+
													</BodyText>
												</Box>
											</Box>
										</Box>
										<Box
											display='flex'
											justifyContent='space-between'
											textAlign='center'
											mt={'5px'}>
											<BodyText>Infant</BodyText>
											<Box display='flex'>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														border: 0,
														cursor: 'pointer',
														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}
													onClick={() => setInfant(infant - 1)}>
													<BodyText textStyle={{ marginTop: 8 }}>-</BodyText>
												</Box>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														border: 0,
														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}>
													<BodyText textStyle={{ marginTop: 8 }}>
														{infant}
													</BodyText>
												</Box>
												<Box
													style={{
														display: 'block',
														float: 'left',
														width: '40px',
														height: '40px',
														lineHeight: '40px',
														background: 'white',
														textAlign: 'center',
														borderRadius: 0,
														padding: 0,
														border: 0,
														cursor: 'pointer',

														boxShadow: '0 2px 10px rgb(0 0 0 / 15%)',
													}}
													onClick={() => setInfant(infant + 1)}>
													<BodyText textStyle={{ marginTop: 8 }}>+</BodyText>
												</Box>
											</Box>
										</Box>
										<Box
											display='flex'
											alignItems='self-end'
											justifyContent='space-between'>
											<Box>
												<FormControl component='fieldset'>
													{/* <FormLabel component='legend'>Gender</FormLabel> */}
													<RadioGroup
														aria-label='gender'
														name='gender1'
														value={value}
														onChange={handleChange}>
														<FormControlLabel
															value='Economy'
															control={<Radio />}
															label='Economy'
														/>
														<FormControlLabel
															value='Business'
															control={<Radio />}
															label='Business'
														/>
														<FormControlLabel
															value='First Class'
															control={<Radio />}
															label='First Class'
														/>
														<FormControlLabel
															value='Premium Economy'
															control={<Radio />}
															label='Premium Economy'
														/>
													</RadioGroup>
												</FormControl>
											</Box>
											<Box
												style={{
													padding: 10,
													backgroundColor: '#39c9bb',
													cursor: 'pointer',
												}}>
												<BodyText textStyle={{ color: 'white' }}>Done</BodyText>
											</Box>
										</Box>
									</div>
								</Grid>

								<Grid item xs={5}>
									<Box
										style={{
											cursor: 'pointer',
											padding: 17,
											backgroundColor: '#39c9bb',
										}}>
										<TitleText textStyle={{ color: 'white' }}>Search</TitleText>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						container
						alignItems='center'
						className='shadow'
						style={{
							// boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important',
							backgroundColor: 'white',
							height: '4rem',
							borderRadius: 50,
							paddingLeft: 70,
							marginTop: 163,
						}}>
						<Grid item xs={3}>
							<Box display='flex'>
								<img src={flight}></img>
								<TitleText textStyle={{ marginLeft: 10 }}>Flight</TitleText>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box display='flex'>
								<img src={holiday_packages}></img>
								<TitleText textStyle={{ marginLeft: 10 }}>
									Holiday Packages
								</TitleText>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box display='flex'>
								<img src={travel_destination_guide}></img>
								<TitleText textStyle={{ marginLeft: 10 }}>
									Travel Destination Guide
								</TitleText>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box display='flex'>
								<img src={things_to_do}></img>
								<TitleText textStyle={{ marginLeft: 10 }}>
									Things To Do
								</TitleText>
							</Box>
						</Grid>
					</Grid>
					<SimpleSlider value={'Holiday'} />
				</Container>
				<Box style={{ backgroundColor: 'lightgrey' }}>
					<Container style={{ paddingTop: 5, paddingBottom: 60 }}>
						<SimpleSlider value={'Flight'} />
					</Container>
				</Box>
				<Box
					style={{
						background: 'linear-gradient(180deg,#020f23,#19212e)',
					}}>
					<div>
						<div
							style={{
								position: 'absolute',
								borderRadius: '50px',
								opacity: 0.19,
								width: 100,
								height: 100,
								left: '-50px',
								// top: '15px',
								background: 'teal',
							}}></div>
						<div
							style={{
								left: 0,
								marginTop: 497,
								position: 'absolute',
								background: '#f56d6d',
								borderRadius: '50px',
								opacity: 0.18,
								width: 100,
								height: 100,
							}}></div>
						<div
							style={{
								left: '50%',
								// top: '-40px',
								transform: 'translate(-50%)',
								position: 'absolute',
								background: '#f56d6d',
								borderRadius: '50px',
								opacity: 0.18,
								width: '80px',
								height: '80px',
							}}></div>
						<div
							style={{
								position: 'absolute',
								// right: -50,
								width: 100,
								height: 100,
								// bottom: '25%',
								marginTop: '11%',
								marginLeft: '91%',
								background: '#39c9bb',
								opacity: 0.18,
								transform: 'rotate(45deg)',
							}}></div>
					</div>
					<Container style={{ paddingTop: 5, paddingBottom: 60 }}>
						<SimpleSlider value={'Package'} />
					</Container>
				</Box>
				<Box mt={'30px'}>
					<Container>
						<ExploreTravel />
					</Container>
				</Box>
				<Box mt={'30px'}>
					<Container>
						<ProductOffer />
					</Container>
				</Box>
				<Box mt={'30px'}>
					<Divider />
					<Container>
						<About />
					</Container>
				</Box>
				<Box
					mt={'30px'}
					style={{ backgroundColor: '#2c3544', padding: '1.25rem' }}>
					<Footer />
					{/* <div
						style={{
							position: 'absolute',
							top: '-20px',
							left: '50%',
							transform: 'translateX(-50%)',
							width: '162px',
							height: '100px',
							cursor: 'pointer',
							textAlign: 'center',
						}}></div> */}
				</Box>
			</Box>
			<Box
				style={{
					backgroundImage: `url(${home})`,
					height: 400,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: '1px -323px',
					position: 'relative',
				}}></Box>

			<div>
				<Drawer
					anchor={'left'}
					// className={classes.root}
					open={drawer}
					onClose={() => dispatch(toggleDrawerModal(false))}
					style={{ width: '30%' }}
					className={classes.drawer}
					onKeyDown
					// variant='permanent'
					classes={{
						paper: classes.drawerPaper,
					}}

					// onClose={toggleDrawer(anchor, false)}
				>
					<div>
						<Box
							style={{ textAlign: 'center' }}
							my={2}
							mx={2}
							p={1}
							alignItems='center'>
							<Box>
								<Box display='flex' alignItems='center'>
									<Box>
										<Avatar>H</Avatar>
									</Box>
									<Box ml={'15px'}>
										<TitleText>Hello Guest!</TitleText>
										<BodyText>Login/Signup</BodyText>
									</Box>
								</Box>
							</Box>
						</Box>
					</div>
					<Divider />
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
					<List>
						<ListItem button key={'Inbox'}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Inbox'} />
						</ListItem>
						<Divider />
					</List>
				</Drawer>
			</div>
		</>
	);
};

export default Home;
